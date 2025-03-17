export interface ForumPost {
    user_id:number,
    title:string,
    content:string
}

export interface ForumAll {
    content:string
    id:number,
    title:string,
    user_id:number,
    user_name:string,
}

export interface ForumReplyAll {
    id:number,
    user_id:number,
    user_name:string,
    post_id:number,
    title: string;
    content:string
}

export interface ForumReply {
    post_id:number,
    content:string,
}

export interface DeleteReply {
    id:number,
    content:string,
}