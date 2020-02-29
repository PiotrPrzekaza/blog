const path = require('path')
const { slugify } = require('./src/util/utilityFunctions')
const authors = require('./src/util/authors')
const _ = require('lodash')

exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === 'MarkdownRemark') {
        const slugFromTitle = slugify(node.frontmatter.title)
        createNodeField({
            node,
            name: 'slug',
            value: slugFromTitle,
        })
    }
}

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions

    const templates = {
        SinglePost: path.resolve('src/templates/single-post.js'),
        tagsPage: path.resolve('src/templates/tags-page.js'),
        tagPosts: path.resolve('src/templates/tag-post.js'),
        listPost: path.resolve('src/templates/list-post.js'),
        authorPost: path.resolve('src/templates/author-post.js'),
    }
    return graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            author
                            tags
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `).then(res => {
        if (res.errors) return Promise.reject(res.errors)

        const posts = res.data.allMarkdownRemark.edges

        posts.forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: templates.SinglePost,
                context: {
                    slug: node.fields.slug,
                    imageUrl: authors.find(x => x.name === node.frontmatter.author).imageUrl,
                },
            })
        })

        let tags = []
        _.each(posts, edge => {
            if (_.get(edge, 'node.frontmatter.tags')) {
                tags = tags.concat(edge.node.frontmatter.tags)
            }
        })

        let tagPageCounts = {}
        tags.forEach(tag => {
            tagPageCounts[tag] = (tagPageCounts[tag] || 0) + 1
        })
        tags = _.uniq(tags)
        //create tags page
        createPage({
            path: `/tags`,
            component: templates.tagsPage,
            context: {
                tags,
                tagPageCounts,
            },
        })

        //create tags post page

        tags.forEach(tag => {
            createPage({
                path: `/tag/${slugify(tag)}`,
                component: templates.tagPosts,
                context: {
                    tag,
                },
            })
        })

        const postPerPage = 2
        const numberOfPages = Math.ceil(posts.length / postPerPage)

        Array.from({
            length: numberOfPages,
        }).forEach((_, index) => {
            const isFirstPage = index === 0
            const currentPage = index + 1

            if (isFirstPage) return

            createPage({
                path: `/page/${currentPage}`,
                component: templates.listPost,
                context: {
                    limit: postPerPage,
                    skip: index * postPerPage,
                    currentPage,
                    numberOfPages,
                },
            })
        })

        authors.forEach(author => {
            createPage({
                path: `/author/${slugify(author.name)}`,
                component: templates.authorPost,
                context: {
                    authorName: author.name,
                    imageUrl: author.imageUrl,
                },
            })
        })
    })
}
