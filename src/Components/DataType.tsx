export type MediaDataType = {
    postId: string;
    comment: {
        commentingAllowed: boolean;
        count: number
    };
    creator: {
        handle: string;
        id: string;
        name: string;
        pic: string
    };
    submission: {
        description: string;
        hyperlink: string;
        mediaUrl: string;
        placeholderUrl: string;
        thumbnail: string;
        title: string
    };
    reaction: {
        count: number;
        voted: boolean
    }
  }

  export interface submissionType {
        description: string;
        hyperlink: string;
        mediaUrl: string;
        placeholderUrl: string;
        thumbnail: string;
        title: string
  }

  export interface creatorDataType {
    handle: string;
    id: string;
    name: string;
    pic: string
  }