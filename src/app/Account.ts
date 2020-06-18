export interface Account {
    username: string,
    passwordHash: string,
    fullName: string,
    email: string,
    phone: string,
    address: string
}
export interface RequestArticle {
    title: string,
    converImage: string,
    content: string
}

export interface ResponseArticle {
    uuid: string,
    owner: string,
    createDate: string,
    lastEditDate: string,
    lastEditAccount: string,
    title: string,
    coverImage: string,
    content: string
}

export interface RequestKanban {
    name: string,
    owner: string,
    description: string,
    eventType: string
}

export interface ResponseKanban {
    uuid: string,
    name: string,
    owner: string,
    articleUuid: [],
    description: string,
    posts: []
}

export interface PostRequestEvent {
    owner: string,
    eventType: string,
    context: string,
    status: string
}

export interface ResponseEvent {
    uuid: string,
    owner: string,
    createData: string,
    lastEditDate: string,
    lastEditAccount: string,
    context: string,
    status: string
}



export interface Permission {
    account: string,
    permission: string
}

export interface information {
    title: string,
    coverImage: string,
    content: string
}