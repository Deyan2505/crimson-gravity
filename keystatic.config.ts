
import { config, fields, collection } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },
    collections: {
        posts: collection({
            label: 'Blog Posts',
            slugField: 'title',
            path: 'content/posts/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                subtitle: fields.text({ label: 'Subtitle' }),
                author: fields.text({ label: 'Author', defaultValue: 'Дани' }),
                date: fields.text({ label: 'Date', description: 'Format: 26 Декември 2025' }),
                readTime: fields.text({ label: 'Read Time', defaultValue: '5 мин четене' }),
                category: fields.select({
                    label: 'Category',
                    options: [
                        { label: 'Ревюта', value: 'Ревюта' },
                        { label: 'Технологии', value: 'Технологии' },
                        { label: 'Книги', value: 'Книги' },
                        { label: 'За Дома', value: 'За Дома' },
                        { label: 'Фотография', value: 'Фотография' },
                        { label: 'Психология', value: 'Психология' },
                        { label: 'Аудио', value: 'Аудио' },
                    ],
                    defaultValue: 'Ревюта'
                }),
                image: fields.image({
                    label: 'Main Image',
                    directory: 'public/images/posts',
                    publicPath: '/images/posts/',
                }),
                audio: fields.file({
                    label: 'Audio File (Optional)',
                    directory: 'public/audio',
                    publicPath: '/audio/',
                }),
                content: fields.document({
                    label: 'Content',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: {
                        directory: 'public/images/posts',
                        publicPath: '/images/posts/',
                    },
                }),
            },
        }),
    },
});
