"use client";
import React from 'react'
import { useState, useEffect } from 'react';

import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/v2/index.css';
// import {useUser} from "@clerk/nextjs";
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const ChatForum = ({clerkUser, slug}) => {
    const apiKey = process.env.NEXT_PUBLIC_STREAM_KEY;

    const userId = clerkUser?.id;
    const userName = clerkUser?.name;
    const userToken = clerkUser?.token;

    const user = {
        id: userId,
        name: userName,
        image: `https://getstream.io/random_png/?name=${userName}`,
    };
    const [channel, setChannel] = useState();
    const client = useCreateChatClient({
        apiKey,
        tokenOrProvider: userToken,
        userData: user,
    });

    useEffect(() => {
        if (!client) return;

        const channel = client.channel('messaging', slug, {
            image: 'https://getstream.io/random_png/?name=react',
            name: capitalize(slug)+" Discussion Forum",
            members: [userId],
        });

        setChannel(channel);
        channel.addMembers([userId]);
    }, [client]);

    if (!client) return <div>Setting up client & connection...</div>;

    return (
        <Chat client={client}>
            <Channel channel={channel}>
                <Window>
                    <ChannelHeader />
                    <MessageList />
                    <MessageInput />
                </Window>
                <Thread />
            </Channel>
        </Chat>
    );

}
export default ChatForum
