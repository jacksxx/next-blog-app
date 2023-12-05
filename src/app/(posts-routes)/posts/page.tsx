'use client'

import React from 'react'
import AddPost from './AddPost'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Post } from '@/types/Post'
import PostList from './PostLists'

const Page = () => {

  const getPosts = async () => {
    const res = await axios.get('/api/posts');
    return res.data;
  }

  const { data: posts, isLoading } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: getPosts
  });

  return (
    <div>
      <h1 className='textH1'>POSTS PAGE TESTE</h1>
      <AddPost />
      <ul>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          posts ? (
            <PostList posts={posts} />
          ) : (
            <p className='textP'>No posts available.</p>
          )
        )}
      </ul>
    </div>
  )
}

export default Page