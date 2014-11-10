interface IPomeloBackendSession {
    // UID stored as Session
    uid : string;

    // Bind UID of User session
    bind(uid : string, cb ?: () => any): void;

    // Unbind UID of User session
    unbind(uid : string, cb ?: () => any): void;

    // Get value as Key
    get(key : string): string;

    // Store a Key as Value
    set(key : string, value : string): void;

    // Push the key/value in backend session to the front internal session.
    push(key : string, cb ?: () => any): void;

    // Push all the key/values in backend session to the frontend internal session.
    pushAll(cb ?: () => any): void;
}

interface IPomeloChannel {
    // Add user into Channel
    add(uid : string, sid : string): boolean;

    // Destroy channel
    destroy() : void;

    // Leave Channel
    leave(uid : string, sid : string): boolean;

    // Get a member found by his UID into Channel
    getMember(uid : string): any;

    // Get all members UID into Channel
    getMembers(): string[];

    // Push message into Channel
    pushMessage(route : any, message ?: any, cb ?:() => any) : void;
}

interface IPomeloChannelService {
    // Create a Channel
    createChannel (name : string): IPomeloChannel;

    // Get a Channel
    getChannel(name : string, create ?:boolean) : IPomeloChannel ;

    // Destroy Channel
    destroyChannel (name : string): void;

    // Get a member found by his UID into Channel
    pushMessageByUids(route : any, msg ?: any, uids ?: string[], opts ?: any, cb ?: () => any): void;
}

interface IPomeloApp {

    // Contain a specified rpc in servers remotes
    rpc : any;

    // Get property from setting
    get(setting : string) : any;

}