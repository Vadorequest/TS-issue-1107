/**
 * IChatDataSend
 *
 * @module      :: IChatDataSend
 * @description :: Interface of Data when server send a message
 * to users
 */

/**
 * Used on server reply for formatting text and show it
 */
interface IChatDataSend {
    author : string;
    chatUid ?: string;
    receiver ?: string;
    msg : string;
    role : string;
    tradCode ?: string;
}

/**
 * Used when messages will be displayed to get formatting text and role
 * @example msg : "Author : Hey!!" ; role : "User"
 */
interface IChatMsgMerge {
    msg : string;
    role : string;
}