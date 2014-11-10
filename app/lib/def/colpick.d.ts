interface colpick {
    flat ?: boolean;
    layout ?: string;
    submit ?: any;
    onChange ?: (hsb : string,hex  : string,rgb  : string,el  : string,bySetColor  : string) => void;
}