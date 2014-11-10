/**
 * IChatSecurity
 *
 * @module      :: IChatSecurity
 * @description :: Secure message send by User
 */

interface IChatSecurity
{
    tag: string[];
    userMsg : string;
    status : boolean;
    error : string;
    rank : string;

    checkMsg( msg:string ): IChatSecurity;
    getFirstTag() : IChatSecurity;
    getAfterTag() : void;
}