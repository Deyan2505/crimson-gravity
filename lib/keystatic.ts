
import { createReader } from '@keystatic/core/reader';
import config from '../keystatic.config';
import { cache } from 'react';

// Wrap in cache to dedupe requests during rendering
export const getReader = cache(() => createReader(process.cwd(), config));

export async function getPost(slug: string) {
    const reader = getReader();
    const post = await reader.collections.posts.read(slug, { resolveLinkedFiles: true });

    if (!post) return null;

    return {
        ...post,
        slug,
    };
}

export async function getAllPosts() {
    const reader = getReader();
    const posts = await reader.collections.posts.all();

    return posts.map(post => ({
        ...post.entry,
        slug: post.slug,
    }));
}
