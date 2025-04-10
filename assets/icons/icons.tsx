import Svg, {G, Mask, Path} from "react-native-svg"

export const Moon = (props:any) => {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.353 2.939a1 1 0 01.22 1.08 8 8 0 0010.408 10.408 1 1 0 011.301 1.3A10.003 10.003 0 0112 22C6.477 22 2 17.523 2 12c0-4.207 2.598-7.805 6.273-9.282a1 1 0 011.08.22zM7.086 5.687a8 8 0 1011.228 11.228c-.43.056-.87.085-1.314.085-5.523 0-10-4.477-10-10 0-.445.03-.883.086-1.313z"
                fill="#131313"
            />
        </Svg>
    )
}

export const Sun = (props:any) => {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM4.929 4.929a1 1 0 011.414 0l.707.707A1 1 0 115.636 7.05l-.707-.707a1 1 0 010-1.414zm14.142 0a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM12 9a3 3 0 100 6 3 3 0 000-6zm-5 3a5 5 0 1110 0 5 5 0 01-10 0zm-5 0a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm17 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm-2.05 4.95a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm-11.314 0a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707zM12 19a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z"
                fill="#fff"
            />
        </Svg>
    )
}

export const LeftArrowDark = (props:any) => {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M4.25 12.274h15M10.3 18.299l-6.05-6.024L10.3 6.25"
                stroke="#131313"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export const LeftArrowLight = (props:any) => {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M4.25 12.274h15M10.3 18.299l-6.05-6.024L10.3 6.25"
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export const GoogleDark = (props: any) => {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M11.956 10.356v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.28 5.28 0 010-10.559 5.166 5.166 0 013.29 1.178l2.6-2.6a8.929 8.929 0 10-5.89 15.635c4.467 0 8.529-3.249 8.529-8.934a7.468 7.468 0 00-.2-1.625l-8.329.001z"
                fill="#111112"
            />
        </Svg>
    )
}

export const GoogleLight = (props: any) => {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M11.956 10.356v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.28 5.28 0 010-10.559 5.166 5.166 0 013.29 1.178l2.6-2.6a8.929 8.929 0 10-5.89 15.635c4.467 0 8.529-3.249 8.529-8.934a7.462 7.462 0 00-.2-1.625l-8.329.001z"
                fill="#fff"
            />
        </Svg>
    )
}

export const UKFlag = (props: any) => {
    return (
        <Svg
            width={32}
            height={24}
            viewBox="0 0 32 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Mask
                id="a"
                style={{
                    maskType: "luminance"
                }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={32}
                height={24}
            >
                <Path d="M32 0H0v24h32V0z" fill="#fff" />
            </Mask>
            <G mask="url(#a)">
                <Path d="M32 0H0v24h32V0z" fill="#fff" />
            </G>
            <Mask
                id="b"
                style={{
                    maskType: "luminance"
                }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={32}
                height={24}
            >
                <Path d="M32 0H0v24h32V0z" fill="#fff" />
            </Mask>
            <G mask="url(#b)">
                <Path
                    d="M21.425 8.678L32 1.068V0h-.729L19.215 8.678h2.211z"
                    fill="#BD0034"
                />
            </G>
            <Mask
                id="c"
                style={{
                    maskType: "luminance"
                }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={32}
                height={24}
            >
                <Path d="M32 0H0v24h32V0z" fill="#fff" />
            </Mask>
            <G mask="url(#c)">
                <Path
                    d="M20.927 15.805L32 23.772V22.18l-8.86-6.375h-2.212z"
                    fill="#BD0034"
                />
            </G>
            <Mask
                id="d"
                style={{
                    maskType: "luminance"
                }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={32}
                height={24}
            >
                <Path d="M32 0H0v24h32V0z" fill="#fff" />
            </Mask>
            <G mask="url(#d)">
                <Path d="M0 1.828l9.471 6.85h2.214L0 .234v1.594z" fill="#BD0034" />
            </G>
            <Mask
                id="e"
                style={{
                    maskType: "luminance"
                }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={32}
                height={24}
            >
                <Path d="M32 0H0v24h32V0z" fill="#fff" />
            </Mask>
            <G mask="url(#e)">
                <Path
                    d="M11.183 15.805L0 23.86v.14h2.02l11.377-8.196h-2.214z"
                    fill="#BD0034"
                />
            </G>
            <Mask
                id="f"
                style={{
                    maskType: "luminance"
                }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={32}
                height={24}
            >
                <Path d="M32 0H0v24h32V0z" fill="#fff" />
            </Mask>
            <G mask="url(#f)">
                <Path d="M29.81 0H18.605v8.068L29.808 0z" fill="#1A237B" />
            </G>
            <Mask
                id="g"
                style={{
                    maskType: "luminance"
                }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={32}
                height={24}
            >
                <Path d="M32 0H0v24h32V0z" fill="#fff" />
            </Mask>
            <G mask="url(#g)">
                <Path d="M13.659 0H2.5l11.159 8.068V0z" fill="#1A237B" />
            </G>
            <Mask
                id="h"
                style={{
                    maskType: "luminance"
                }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={32}
                height={24}
            >
                <Path d="M32 0H0v24h32V0z" fill="#fff" />
            </Mask>
            <G mask="url(#h)">
                <Path d="M31.999 8.678V3.171l-7.6 5.507h7.6z" fill="#1A237B" />
            </G>
            <Mask
                id="i"
                style={{
                    maskType: "luminance"
                }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={32}
                height={24}
            >
                <Path d="M32 0H0v24h32V0z" fill="#fff" />
            </Mask>
            <G mask="url(#i)">
                <Path d="M31.999 21.252v-5.447h-7.6l7.6 5.447z" fill="#1A237B" />
            </G>
            <Mask
                id="j"
                style={{
                    maskType: "luminance"
                }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={32}
                height={24}
            >
                <Path d="M32 0H0v24h32V0z" fill="#fff" />
            </Mask>
            <G mask="url(#j)">
                <Path d="M3.133 24.001h10.526v-7.585L3.133 24.001z" fill="#1A237B" />
            </G>
            <Mask
                id="k"
                style={{
                    maskType: "luminance"
                }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={32}
                height={24}
            >
                <Path d="M32 0H0v24h32V0z" fill="#fff" />
            </Mask>
            <G mask="url(#k)">
                <Path d="M18.605 24.001h10.56l-10.56-7.585v7.585z" fill="#1A237B" />
            </G>
            <Mask
                id="l"
                style={{
                    maskType: "luminance"
                }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={32}
                height={24}
            >
                <Path d="M32 0H0v24h32V0z" fill="#fff" />
            </Mask>
            <G mask="url(#l)">
                <Path d="M0 15.805v5.693l7.865-5.693H0z" fill="#1A237B" />
            </G>
            <Mask
                id="m"
                style={{
                    maskType: "luminance"
                }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={32}
                height={24}
            >
                <Path d="M32 0H0v24h32V0z" fill="#fff" />
            </Mask>
            <G mask="url(#m)">
                <Path d="M0 8.678h7.865L0 2.977v5.701z" fill="#1A237B" />
            </G>
            <Mask
                id="n"
                style={{
                    maskType: "luminance"
                }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={32}
                height={24}
            >
                <Path d="M32 0H0v24h32V0z" fill="#fff" />
            </Mask>
            <G mask="url(#n)">
                <Path
                    d="M14.649 0v10.104H0v4.279h14.649V24h2.967v-9.618h14.383v-4.279H17.616V0h-2.967z"
                    fill="#BD0034"
                />
            </G>
        </Svg>
    )
}

export const FranceFlag = (props:any) => {
    return (
        <Svg
            width={32}
            height={24}
            viewBox="0 0 32 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Mask
                id="a"
                style={{
                    maskType: "luminance"
                }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={32}
                height={24}
            >
                <Path d="M32 0H0v24h32V0z" fill="#fff" />
            </Mask>
            <G mask="url(#a)">
                <Path d="M10.667 0H0v24h10.667V0z" fill="#323E95" />
            </G>
            <Mask
                id="b"
                style={{
                    maskType: "luminance"
                }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={32}
                height={24}
            >
                <Path d="M32 0H0v24h32V0z" fill="#fff" />
            </Mask>
            <G mask="url(#b)">
                <Path d="M21.333 0H10.666v24h10.667V0z" fill="#F4F4F4" />
            </G>
            <Mask
                id="c"
                style={{
                    maskType: "luminance"
                }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={32}
                height={24}
            >
                <Path d="M32 0H0v24h32V0z" fill="#fff" />
            </Mask>
            <G mask="url(#c)">
                <Path d="M32 0H21.333v24H32V0z" fill="#D80031" />
            </G>
        </Svg>
    )
}


export const BelgianFlag = (props:any) => {
    return (
        <Svg
            width={32}
            height={24}
            viewBox="0 0 32 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Mask
                id="a"
                style={{
                    maskType: "luminance"
                }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={32}
                height={24}
            >
                <Path d="M32 0H0v24h32V0z" fill="#fff" />
            </Mask>
            <G mask="url(#a)">
                <Path d="M10.667 0H0v24h10.667V0z" fill="#000" />
            </G>
            <Mask
                id="b"
                style={{
                    maskType: "luminance"
                }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={32}
                height={24}
            >
                <Path d="M32 0H0v24h32V0z" fill="#fff" />
            </Mask>
            <G mask="url(#b)">
                <Path d="M21.333 0H10.666v24h10.667V0z" fill="#FFE936" />
            </G>
            <Mask
                id="c"
                style={{
                    maskType: "luminance"
                }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={32}
                height={24}
            >
                <Path d="M32 0H0v24h32V0z" fill="#fff" />
            </Mask>
            <G mask="url(#c)">
                <Path d="M32 0H21.333v24H32V0z" fill="#FF0F21" />
            </G>
        </Svg>
    )
}

export const TurkeyFlag = (props:any) => {
    return (
        <Svg
            width={32}
            height={24}
            viewBox="0 0 32 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Mask
                id="a"
                style={{
                    maskType: "luminance"
                }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={32}
                height={24}
            >
                <Path d="M32 0H0v24h32V0z" fill="#fff" />
            </Mask>
            <G mask="url(#a)">
                <Path d="M32 0H0v24h32V0z" fill="#D00027" />
            </G>
            <Mask
                id="b"
                style={{
                    maskType: "luminance"
                }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={32}
                height={24}
            >
                <Path d="M32 0H0v24h32V0z" fill="#fff" />
            </Mask>
            <G mask="url(#b)">
                <Mask
                    id="c"
                    style={{
                        maskType: "luminance"
                    }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={32}
                    height={24}
                >
                    <Path d="M32 0H0v24h32V0z" fill="#fff" />
                </Mask>
                <G mask="url(#c)">
                    <Path
                        d="M9.333 6c2.577 0 4.668 2.685 4.668 5.999 0 3.313-2.09 6-4.668 6-2.576 0-4.665-2.686-4.665-6s2.089-6 4.665-6z"
                        fill="#fff"
                    />
                </G>
                <Mask
                    id="d"
                    style={{
                        maskType: "luminance"
                    }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={32}
                    height={24}
                >
                    <Path d="M32 0H0v24h32V0z" fill="#fff" />
                </Mask>
                <G mask="url(#d)">
                    <Path
                        d="M10.5 7.196c2.063 0 3.733 2.154 3.733 4.802 0 2.652-1.67 4.801-3.734 4.801-2.061 0-3.733-2.15-3.733-4.801 0-2.648 1.672-4.802 3.733-4.802z"
                        fill="#D00027"
                    />
                </G>
                <Mask
                    id="e"
                    style={{
                        maskType: "luminance"
                    }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={32}
                    height={24}
                >
                    <Path d="M32 0H0v24h32V0z" fill="#fff" />
                </Mask>
                <G mask="url(#e)">
                    <Path d="M13.277 11.998l2.217.929.36-1.432-2.577.503z" fill="#fff" />
                </G>
                <Mask
                    id="f"
                    style={{
                        maskType: "luminance"
                    }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={32}
                    height={24}
                >
                    <Path d="M32 0H0v24h32V0z" fill="#fff" />
                </Mask>
                <G mask="url(#f)">
                    <Path
                        d="M13.277 11.998l2.217-.925.36 1.427-2.577-.502z"
                        fill="#fff"
                    />
                </G>
                <Mask
                    id="g"
                    style={{
                        maskType: "luminance"
                    }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={32}
                    height={24}
                >
                    <Path d="M32 0H0v24h32V0z" fill="#fff" />
                </Mask>
                <G mask="url(#g)">
                    <Path d="M14.89 9.144v3.002h1.165L14.89 9.144z" fill="#fff" />
                </G>
                <Mask
                    id="h"
                    style={{
                        maskType: "luminance"
                    }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={32}
                    height={24}
                >
                    <Path d="M32 0H0v24h32V0z" fill="#fff" />
                </Mask>
                <G mask="url(#h)">
                    <Path d="M14.89 9.144l1.37 2.427-.942.881-.429-3.308z" fill="#fff" />
                </G>
                <Mask
                    id="i"
                    style={{
                        maskType: "luminance"
                    }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={32}
                    height={24}
                >
                    <Path d="M32 0H0v24h32V0z" fill="#fff" />
                </Mask>
                <G mask="url(#i)">
                    <Path
                        d="M14.89 14.856l1.37-2.432-.942-.881-.429 3.313z"
                        fill="#fff"
                    />
                </G>
                <Mask
                    id="j"
                    style={{
                        maskType: "luminance"
                    }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={32}
                    height={24}
                >
                    <Path d="M32 0H0v24h32V0z" fill="#fff" />
                </Mask>
                <G mask="url(#j)">
                    <Path d="M14.89 14.856v-3.007h1.165l-1.166 3.007z" fill="#fff" />
                </G>
                <Mask
                    id="k"
                    style={{
                        maskType: "luminance"
                    }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={32}
                    height={24}
                >
                    <Path d="M32 0H0v24h32V0z" fill="#fff" />
                </Mask>
                <G mask="url(#k)">
                    <Path
                        d="M17.496 10.241l-2.216.92.36 1.426 1.856-2.346z"
                        fill="#fff"
                    />
                </G>
                <Mask
                    id="l"
                    style={{
                        maskType: "luminance"
                    }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={32}
                    height={24}
                >
                    <Path d="M32 0H0v24h32V0z" fill="#fff" />
                </Mask>
                <G mask="url(#l)">
                    <Path
                        d="M17.496 10.241l-1.37 2.422-.946-.881 2.316-1.54z"
                        fill="#fff"
                    />
                </G>
                <Mask
                    id="m"
                    style={{
                        maskType: "luminance"
                    }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={32}
                    height={24}
                >
                    <Path d="M32 0H0v24h32V0z" fill="#fff" />
                </Mask>
                <G mask="url(#m)">
                    <Path
                        d="M17.496 13.765l-1.37-2.428-.946.881 2.316 1.547z"
                        fill="#fff"
                    />
                </G>
                <Mask
                    id="n"
                    style={{
                        maskType: "luminance"
                    }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={32}
                    height={24}
                >
                    <Path d="M32 0H0v24h32V0z" fill="#fff" />
                </Mask>
                <G mask="url(#n)">
                    <Path
                        d="M17.496 13.765l-2.216-.93.36-1.426 1.856 2.356z"
                        fill="#fff"
                    />
                </G>
            </G>
        </Svg>
    )
}

export const ArrowRightDark = (props:any) => {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M19.75 11.726h-15M13.7 5.701l6.05 6.024-6.05 6.025"
                stroke="#131313"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export const ArrowRightLight = (props:any) => {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M19.75 11.726h-15M13.7 5.701l6.05 6.024-6.05 6.025"
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}