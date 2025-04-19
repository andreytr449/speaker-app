import Svg, {
    Circle,
    ClipPath,
    Defs, Ellipse,
    G,
    Mask,
    Path,
    Rect
} from "react-native-svg"

export const Moon = (props: any) => {
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

export const Sun = (props: any) => {
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

export const LeftArrowDark = (props: any) => {
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

export const LeftArrowLight = (props: any) => {
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
                <Path d="M32 0H0v24h32V0z" fill="#fff"/>
            </Mask>
            <G mask="url(#a)">
                <Path d="M32 0H0v24h32V0z" fill="#fff"/>
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
                <Path d="M32 0H0v24h32V0z" fill="#fff"/>
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
                <Path d="M32 0H0v24h32V0z" fill="#fff"/>
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
                <Path d="M32 0H0v24h32V0z" fill="#fff"/>
            </Mask>
            <G mask="url(#d)">
                <Path d="M0 1.828l9.471 6.85h2.214L0 .234v1.594z" fill="#BD0034"/>
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
                <Path d="M32 0H0v24h32V0z" fill="#fff"/>
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
                <Path d="M32 0H0v24h32V0z" fill="#fff"/>
            </Mask>
            <G mask="url(#f)">
                <Path d="M29.81 0H18.605v8.068L29.808 0z" fill="#1A237B"/>
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
                <Path d="M32 0H0v24h32V0z" fill="#fff"/>
            </Mask>
            <G mask="url(#g)">
                <Path d="M13.659 0H2.5l11.159 8.068V0z" fill="#1A237B"/>
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
                <Path d="M32 0H0v24h32V0z" fill="#fff"/>
            </Mask>
            <G mask="url(#h)">
                <Path d="M31.999 8.678V3.171l-7.6 5.507h7.6z" fill="#1A237B"/>
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
                <Path d="M32 0H0v24h32V0z" fill="#fff"/>
            </Mask>
            <G mask="url(#i)">
                <Path d="M31.999 21.252v-5.447h-7.6l7.6 5.447z" fill="#1A237B"/>
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
                <Path d="M32 0H0v24h32V0z" fill="#fff"/>
            </Mask>
            <G mask="url(#j)">
                <Path d="M3.133 24.001h10.526v-7.585L3.133 24.001z" fill="#1A237B"/>
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
                <Path d="M32 0H0v24h32V0z" fill="#fff"/>
            </Mask>
            <G mask="url(#k)">
                <Path d="M18.605 24.001h10.56l-10.56-7.585v7.585z" fill="#1A237B"/>
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
                <Path d="M32 0H0v24h32V0z" fill="#fff"/>
            </Mask>
            <G mask="url(#l)">
                <Path d="M0 15.805v5.693l7.865-5.693H0z" fill="#1A237B"/>
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
                <Path d="M32 0H0v24h32V0z" fill="#fff"/>
            </Mask>
            <G mask="url(#m)">
                <Path d="M0 8.678h7.865L0 2.977v5.701z" fill="#1A237B"/>
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
                <Path d="M32 0H0v24h32V0z" fill="#fff"/>
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

export const FranceFlag = (props: any) => {
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
                <Path d="M32 0H0v24h32V0z" fill="#fff"/>
            </Mask>
            <G mask="url(#a)">
                <Path d="M10.667 0H0v24h10.667V0z" fill="#323E95"/>
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
                <Path d="M32 0H0v24h32V0z" fill="#fff"/>
            </Mask>
            <G mask="url(#b)">
                <Path d="M21.333 0H10.666v24h10.667V0z" fill="#F4F4F4"/>
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
                <Path d="M32 0H0v24h32V0z" fill="#fff"/>
            </Mask>
            <G mask="url(#c)">
                <Path d="M32 0H21.333v24H32V0z" fill="#D80031"/>
            </G>
        </Svg>
    )
}


export const BelgianFlag = (props: any) => {
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
                <Path d="M32 0H0v24h32V0z" fill="#fff"/>
            </Mask>
            <G mask="url(#a)">
                <Path d="M10.667 0H0v24h10.667V0z" fill="#000"/>
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
                <Path d="M32 0H0v24h32V0z" fill="#fff"/>
            </Mask>
            <G mask="url(#b)">
                <Path d="M21.333 0H10.666v24h10.667V0z" fill="#FFE936"/>
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
                <Path d="M32 0H0v24h32V0z" fill="#fff"/>
            </Mask>
            <G mask="url(#c)">
                <Path d="M32 0H21.333v24H32V0z" fill="#FF0F21"/>
            </G>
        </Svg>
    )
}

export const TurkeyFlag = (props: any) => {
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
                <Path d="M32 0H0v24h32V0z" fill="#fff"/>
            </Mask>
            <G mask="url(#a)">
                <Path d="M32 0H0v24h32V0z" fill="#D00027"/>
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
                <Path d="M32 0H0v24h32V0z" fill="#fff"/>
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
                    <Path d="M32 0H0v24h32V0z" fill="#fff"/>
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
                    <Path d="M32 0H0v24h32V0z" fill="#fff"/>
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
                    <Path d="M32 0H0v24h32V0z" fill="#fff"/>
                </Mask>
                <G mask="url(#e)">
                    <Path d="M13.277 11.998l2.217.929.36-1.432-2.577.503z" fill="#fff"/>
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
                    <Path d="M32 0H0v24h32V0z" fill="#fff"/>
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
                    <Path d="M32 0H0v24h32V0z" fill="#fff"/>
                </Mask>
                <G mask="url(#g)">
                    <Path d="M14.89 9.144v3.002h1.165L14.89 9.144z" fill="#fff"/>
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
                    <Path d="M32 0H0v24h32V0z" fill="#fff"/>
                </Mask>
                <G mask="url(#h)">
                    <Path d="M14.89 9.144l1.37 2.427-.942.881-.429-3.308z" fill="#fff"/>
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
                    <Path d="M32 0H0v24h32V0z" fill="#fff"/>
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
                    <Path d="M32 0H0v24h32V0z" fill="#fff"/>
                </Mask>
                <G mask="url(#j)">
                    <Path d="M14.89 14.856v-3.007h1.165l-1.166 3.007z" fill="#fff"/>
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
                    <Path d="M32 0H0v24h32V0z" fill="#fff"/>
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
                    <Path d="M32 0H0v24h32V0z" fill="#fff"/>
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
                    <Path d="M32 0H0v24h32V0z" fill="#fff"/>
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
                    <Path d="M32 0H0v24h32V0z" fill="#fff"/>
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

export const ArrowRightDark = (props: any) => {
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

export const ArrowRightLight = (props: any) => {
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

export const BookActive = (props: any) => {
    return (
        <Svg
            width={29}
            height={24}
            viewBox="0 0 29 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M10.5 20a3.003 3.003 0 013 3 1 1 0 002 0 3.003 3.003 0 013-3h8a2.002 2.002 0 002-2V2a2.002 2.002 0 00-2-2h-6a5.006 5.006 0 00-5 5v10a1 1 0 01-2 0V5a5.006 5.006 0 00-5-5h-6a2.002 2.002 0 00-2 2v16a2.002 2.002 0 002 2h8z"
                fill="#007AFF"
            />
        </Svg>
    )
}


export const Book = ({isDark, ...props}: { isDark?: boolean, props?: any }) => {
    return (
        <Svg
            width={33}
            height={32}
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.5 8a3 3 0 00-3 3 1 1 0 11-2 0 5 5 0 015-5h8a2 2 0 012 2v16a2 2 0 01-2 2h-8a3 3 0 00-3 3 1 1 0 11-2 0 5 5 0 015-5h8V8h-8z"
                fill={isDark ? '#fff' : "#131313"}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.086 6.586A2 2 0 014.5 6h8a5 5 0 015 5v18a1 1 0 11-2 0 3 3 0 00-3-3h-8a2 2 0 01-2-2V8a2 2 0 01.586-1.414zM15.5 25V11a3 3 0 00-3-3h-8v16h8a5 5 0 013 1z"
                fill={isDark ? '#fff' : "#131313"}
            />
        </Svg>
    )
}


export const VocabularyIcon = ({isDark, ...props}: { isDark?: boolean, props?: any }) => {
    return (
        <Svg
            width={19}
            height={21}
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M.792.292A1 1 0 011.5-.001H11a5.5 5.5 0 013.813 9.464A6 6 0 0112.5 21l-11-.001a1 1 0 01-1-1v-19A1 1 0 01.791.292zM11 9a3.5 3.5 0 100-7H2.5v7H11zm-8.5 2v8h10a4 4 0 100-8h-10z"
                fill={isDark ? '#fff' : "#131313"}
            />
        </Svg>
    )
}


export const VocabularyActive = (props: any) => {
    return (
        <Svg
            width={19}
            height={23}
            viewBox="0 0 19 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M.721 1.222A1.1 1.1 0 011.5.899L11 .9a5.6 5.6 0 013.99 9.53 6.097 6.097 0 013.61 5.57 6.1 6.1 0 01-6.1 6.1h-11A1.1 1.1 0 01.4 21V2a1.1 1.1 0 01.322-.778zM11 9.9a3.4 3.4 0 000-6.8H2.6v6.8H11zm-8.4 2.2v7.8h9.9a3.9 3.9 0 000-7.8H2.6z"
                fill="#007AFF"
            />
        </Svg>
    )
}


export const ChatIcon = ({isDark, ...props}: { isDark?: boolean, props?: any }) => {
    return (
        <Svg
            width={29}
            height={26}
            viewBox="0 0 29 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.996 2.023A7.996 7.996 0 003.61 14.07a1 1 0 01.11.798l-.765 2.676 2.676-.764a1 1 0 01.797.109 7.996 7.996 0 104.567-14.866zM5.78 18.818a9.997 9.997 0 10-4.097-4.097l-.774 2.706a1.75 1.75 0 002.164 2.164l2.707-.773z"
                fill={isDark ? '#fff' : "#131313"}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.994 6.959a1 1 0 011.053-.944 10.003 10.003 0 018.27 14.706l.774 2.707a1.75 1.75 0 01-2.164 2.163l-2.707-.773a10.004 10.004 0 01-14.156-5.499 1 1 0 011.886-.664 8.007 8.007 0 0011.621 4.234 1 1 0 01.797-.11l2.676.765-.765-2.675a1 1 0 01.11-.798 8.002 8.002 0 00-6.452-12.059 1 1 0 01-.943-1.053z"
                fill={isDark ? '#fff' : "#131313"}
            />
        </Svg>
    )
}


export const ProfileIcon = ({isDark, ...props}: { isDark?: boolean, props?: any }) => {
    return (
        <Svg
            width={23}
            height={28}
            viewBox="0 0 23 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.448 18.294c1.906-.64 4.432-.832 7.032-.832 2.615 0 5.142.2 7.046.848.957.325 1.83.788 2.472 1.46a3.695 3.695 0 011.041 2.622c0 1.044-.38 1.926-1.048 2.62-.646.67-1.522 1.128-2.48 1.45-1.906.64-4.432.832-7.031.832-2.616 0-5.142-.2-7.047-.847-.957-.325-1.83-.788-2.473-1.461a3.695 3.695 0 01-1.04-2.622c0-1.044.378-1.926 1.048-2.62.645-.67 1.521-1.129 2.48-1.45zm-1.04 2.837c-.318.33-.489.716-.489 1.233 0 .519.171.909.488 1.241.34.357.885.682 1.67.948 1.58.537 3.833.741 6.403.741 2.557 0 4.811-.197 6.395-.728.787-.264 1.334-.587 1.675-.941.318-.33.49-.717.49-1.233 0-.518-.172-.908-.489-1.24-.34-.357-.885-.682-1.67-.949-1.579-.537-3.832-.741-6.401-.741-2.558 0-4.812.197-6.397.728-.787.264-1.334.587-1.675.94zM4.351 7.878a7.128 7.128 0 117.129 7.13h-.047a7.107 7.107 0 01-7.082-7.13zm7.129-5.125A5.128 5.128 0 006.35 7.88v.003a5.108 5.108 0 005.087 5.125h.042a5.128 5.128 0 000-10.255z"
                fill={isDark ? '#fff' : "#131313"}
            />
        </Svg>
    )
}

export const ProfileIconActive = ({isDark, ...props}: {
    isDark?: boolean,
    props?: any
}) => {
    return (
        <Svg
            width={23}
            height={28}
            viewBox="0 0 23 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.559 7.721a7.032 7.032 0 01-7.059 7.056 7.033 7.033 0 01-7.058-7.056A7.032 7.032 0 0111.5.667 7.031 7.031 0 0118.56 7.72zM11.5 27.333c-5.783 0-10.667-.94-10.667-4.566 0-3.629 4.914-4.535 10.667-4.535 5.785 0 10.667.94 10.667 4.567 0 3.628-4.914 4.534-10.667 4.534z"
                fill="#007AFF"
            />
        </Svg>
    )
}

export const ChatIconActive = (props: any) => {
    return (
        <Svg
            width={33}
            height={32}
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M29.317 23.721a10.001 10.001 0 00-7.621-14.647A10 10 0 103.683 17.72l-.773 2.706a1.75 1.75 0 002.163 2.164l2.706-.773a9.979 9.979 0 003.524 1.11 10.004 10.004 0 0013.918 4.89l2.706.773a1.75 1.75 0 002.164-2.164l-.774-2.706zm-1.935-.639a1 1 0 00-.103.786l.765 2.676-2.676-.764a1.001 1.001 0 00-.785.102 8.004 8.004 0 01-11.043-2.936 9.986 9.986 0 008.797-11.732 8.003 8.003 0 015.045 11.868z"
                fill="#007AFF"
            />
        </Svg>
    )
}

export const FireIcon = ({isDark, ...props}: { isDark?: boolean, props?: any }) => {
    return (
        <Svg
            width={18}
            height={20}
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.359.22a1 1 0 011.332.07c.93.925 1.884 1.573 2.85 2.21l.185.122c.89.586 1.825 1.201 2.638 2.014A8.975 8.975 0 0118 11 9 9 0 112.636 4.636a1 1 0 011.634.331l.007.017.049.1c.048.092.127.233.243.403.136.198.321.434.564.676.186-1.261.604-2.684 1.462-3.996A8.365 8.365 0 018.359.221zM3.23 7.035A6.98 6.98 0 002 11a7 7 0 1011.95-4.95c-.664-.663-1.438-1.173-2.371-1.789l-.14-.092c-.765-.505-1.607-1.07-2.457-1.809a6.39 6.39 0 00-.713.903c-.697 1.064-1.038 2.26-1.182 3.366A10.56 10.56 0 007 8a1 1 0 01-1.447.894 7.011 7.011 0 01-2.323-1.86z"
                fill={isDark ? '#fff' : "#131313"}
            />
        </Svg>
    )
}

export const StarIcon = ({isDark, ...props}: { isDark?: boolean, props?: any }) => {
    return (
        <Svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 2.5a.255.255 0 00-.125.031.194.194 0 00-.045.035.237.237 0 00-.04.058m0 0l-1.826 3.65a2.24 2.24 0 01-1.679 1.207l-4.087.59a.239.239 0 00-.11.04.22.22 0 00-.085.211.168.168 0 00.017.05.234.234 0 00.046.058l.37.356 2.587 2.485a2.21 2.21 0 01.646 1.968l-.697 4.01a.215.215 0 000 .076c.003.018.01.037.02.056a.252.252 0 00.172.116.209.209 0 00.067 0 .258.258 0 00.08-.027h.002l2.74-1.421.913-.474a2.252 2.252 0 012.068 0l3.654 1.895a.259.259 0 00.08.027.209.209 0 00.068 0 .254.254 0 00.172-.117.173.173 0 00.021-.056.212.212 0 000-.075l-.698-4.01a2.2 2.2 0 01.646-1.967l2.956-2.841a.215.215 0 00.057-.081.19.19 0 00.007-.097.23.23 0 00-.05-.109.197.197 0 00-.055-.045.254.254 0 00-.09-.029l-4.087-.588a2.238 2.238 0 01-1.678-1.207l-1.142-2.281-.685-1.37a.22.22 0 00-.061-.077A.243.243 0 0010 2.5M8.886.793A2.254 2.254 0 0110 .5a2.217 2.217 0 011.999 1.23l.228.456.914 1.825.685 1.37c.016.03.04.059.069.08.03.02.065.036.104.041l4.089.589a2.216 2.216 0 011.782 2.94 2.21 2.21 0 01-.551.842l-2.956 2.84a.211.211 0 00-.055.089.198.198 0 00-.007.094l.698 4.01a2.184 2.184 0 01-.825 2.122 2.225 2.225 0 01-2.407.217h-.001l-3.653-1.895a.245.245 0 00-.226 0l-3.653 1.895a2.226 2.226 0 01-2.298-.137 2.237 2.237 0 01-.672-.721 2.172 2.172 0 01-.262-1.48l.697-4.01a.2.2 0 00-.062-.184L1.05 10.229l-.369-.355a2.192 2.192 0 01-.617-2.11A2.22 2.22 0 011.912 6.09L6 5.502a.242.242 0 00.105-.041.217.217 0 00.07-.08L8 1.73c.207-.412.519-.729.885-.937z"
                fill={isDark ? '#fff' : "#131313"}
            />
        </Svg>
    )
}

export const BellIcon = ({isDark, ...props}: { isDark?: boolean, props?: any }) => {
    return (
        <Svg
            width={18}
            height={20}
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.019 2.665a3 3 0 015.963 0A7 7 0 0116 9v3.159c0 .273.109.535.302.729l1.405 1.405A1 1 0 0117 16h-4a4 4 0 11-8 0H1a1 1 0 01-.707-1.707l1.405-1.405c.193-.194.302-.456.302-.73V9a7 7 0 014.019-6.335zM7 16a2 2 0 104 0H7zM9 2a1 1 0 00-1 1v.341a1 1 0 01-.667.943A5.002 5.002 0 004 9v3.159c0 .669-.221 1.315-.623 1.841h11.246A3.032 3.032 0 0114 12.159V9a5.002 5.002 0 00-3.333-4.716A1 1 0 0110 3.341V3a1 1 0 00-1-1z"
                fill={isDark ? '#fff' : "#131313"}
            />
        </Svg>
    )
}

export const MarkIcon = ({isDark, ...props}: { isDark?: boolean, props?: any }) => {
    return (
        <Svg
            width={16}
            height={20}
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.017 14.198a2 2 0 011.962.002l4.76 2.69V4.152c0-.873-.27-1.197-.495-1.37-.32-.245-.962-.483-2.094-.483H4.791c-1.101 0-1.771.224-2.115.47-.234.168-.476.445-.476 1.2V16.9l4.817-2.702zm7.305 5.318l-6.327-3.574-6.382 3.58A.95.95 0 01.2 18.694V3.97C.2 1.327 2.167.3 4.791.3h6.36c2.707 0 4.588 1.103 4.588 3.853V18.69a.95.95 0 01-1.417.827z"
                fill={isDark ? '#fff' : "#131313"}
            />
        </Svg>
    )
}

export const LockIcon = ({isDark, ...props}: { isDark?: boolean, props?: any }) => {
    return (
        <Svg
            width={18}
            height={20}
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5a5 5 0 0110 0v3h1a3 3 0 013 3v6a3 3 0 01-3 3H3a3 3 0 01-3-3v-6a3 3 0 013-3h1V5zm2 3h6V5a3 3 0 10-6 0v3zm-3 2a1 1 0 00-1 1v6a1 1 0 001 1h12a1 1 0 001-1v-6a1 1 0 00-1-1H3zm6 2a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z"
                fill={isDark ? '#fff' : "#131313"}
            />
        </Svg>
    )
}

export function DiscountIcon({fill, ...props}: { fill?: string, props?: any }) {
    return (
        <Svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M2.795 5.056a2.262 2.262 0 012.26-2.262h1.03c.597 0 1.169-.237 1.593-.657l.719-.72a2.262 2.262 0 013.199-.009v.001l.01.008.72.72a2.26 2.26 0 001.593.657h1.028a2.262 2.262 0 012.262 2.262v1.027c0 .597.236 1.17.657 1.594l.72.72c.886.881.89 2.313.01 3.2h-.001l-.01.01-.72.72a2.256 2.256 0 00-.656 1.591v1.03a2.26 2.26 0 01-2.261 2.26h-1.031a2.26 2.26 0 00-1.593.658l-.72.72a2.261 2.261 0 01-3.197.011l-.003-.003-.01-.009-.718-.719a2.263 2.263 0 00-1.593-.658H5.056a2.26 2.26 0 01-2.261-2.26v-1.032c0-.597-.237-1.169-.658-1.592l-.72-.72a2.26 2.26 0 01-.01-3.197s0-.002.002-.003l.009-.009.719-.72c.42-.424.658-.996.658-1.594V5.056M7.432 12.572l5.14-5.14"
                stroke={fill ? fill : "#007AFF"}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M12.495 12.5h.01M7.495 7.5h.01"
                stroke={fill ? fill : "#007AFF"}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}


export function SuccessIcon({fill, ...props}: { fill?: string, props?: any }) {
    return (
        <Svg
            width={25}
            height={24}
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.5 3a9 9 0 100 18 9 9 0 000-18zm-11 9c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11z"
                fill={fill ? fill : "#fff"}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.767 8.92a1 1 0 010 1.414l-4.746 4.746a1 1 0 01-1.414 0l-2.374-2.373a1 1 0 111.414-1.414l1.667 1.666 4.039-4.04a1 1 0 011.414 0z"
                fill={fill ? fill : "#fff"}
            />
        </Svg>
    )
}

export function MistakeIcon(props) {
    return (
        <Svg
            width={25}
            height={24}
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.5 3a9 9 0 100 18 9 9 0 000-18zm-11 9c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11z"
                fill="#fff"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.333 8.617a1 1 0 010 1.414l-4.792 4.792a1 1 0 11-1.414-1.414l4.792-4.792a1 1 0 011.414 0z"
                fill="#fff"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.124 8.614a1 1 0 011.414 0l4.796 4.797a1 1 0 11-1.414 1.414l-4.796-4.797a1 1 0 010-1.414z"
                fill="#fff"
            />
        </Svg>
    )
}

export function AverageIcon(props) {
    return (
        <Svg
            width={25}
            height={24}
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.5 3a9 9 0 100 18 9 9 0 000-18zm-11 9c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11z"
                fill="#fff"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.333 8.617a1 1 0 010 1.414l-4.792 4.792a1 1 0 11-1.414-1.414l4.792-4.792a1 1 0 011.414 0z"
                fill="#fff"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.124 8.614a1 1 0 011.414 0l4.796 4.797a1 1 0 11-1.414 1.414l-4.796-4.797a1 1 0 010-1.414z"
                fill="#fff"
            />
        </Svg>
    )
}

export function SearchIcon({isDark, ...props}: { isDark?: boolean, props?: any }) {
    return (
        <Svg
            width={22}
            height={22}
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.767 2.778a7.989 7.989 0 100 15.977 7.989 7.989 0 000-15.977zM.778 10.766C.778 5.25 5.25.778 10.767.778c5.516 0 9.988 4.472 9.988 9.988 0 5.517-4.472 9.989-9.988 9.989-5.517 0-9.989-4.472-9.989-9.989z"
                fill={isDark ? '#fff' : "#131313"}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.31 16.779a1 1 0 011.415-.002l3.523 3.515a1 1 0 11-1.412 1.416l-3.524-3.515a1 1 0 01-.002-1.414z"
                fill={isDark ? '#fff' : "#131313"}
            />
        </Svg>
    )
}

export const ProgressChartIcon = ({isDark, ...props}: {
    isDark?: boolean,
    props?: any
}) => {
    return (
        <Svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 3a3 3 0 013-3h2a3 3 0 013 3v14a3 3 0 01-3 3h-2c-.768 0-1.47-.289-2-.764A2.989 2.989 0 0111 20H9c-.768 0-1.47-.289-2-.764A2.989 2.989 0 015 20H3a3 3 0 01-3-3v-6a3 3 0 013-3h2c.35 0 .687.06 1 .17V7a3 3 0 013-3h2c.35 0 .687.06 1 .17V3zm2 14a1 1 0 001 1h2a1 1 0 001-1V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v14zM12 7a1 1 0 00-1-1H9a1 1 0 00-1 1v10a1 1 0 001 1h2a1 1 0 001-1V7zm-6 4a1 1 0 00-1-1H3a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6z"
                fill={isDark ? '#fff' : "#131313"}
            />
        </Svg>
    )
}


export const ProgressChartActiveIcon = ({isDark, ...props}: {
    isDark?: boolean,
    props?: any
}) => {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path fill={isDark ? '#fff' : "#131313"} d="M3 12H9V20H3z"/>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 5a3 3 0 013-3h2a3 3 0 013 3v14a3 3 0 01-3 3h-2c-.768 0-1.47-.289-2-.764A2.989 2.989 0 0113 22h-2c-.768 0-1.47-.289-2-.764A2.989 2.989 0 017 22H5a3 3 0 01-3-3v-6a3 3 0 013-3h2c.35 0 .687.06 1 .17V9a3 3 0 013-3h2c.35 0 .687.06 1 .17V5zm2 14a1 1 0 001 1h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v14zM14 9a1 1 0 00-1-1h-2a1 1 0 00-1 1v10a1 1 0 001 1h2a1 1 0 001-1V9zm-6 4a1 1 0 00-1-1H5a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6z"
                fill={isDark ? '#fff' : "#131313"}
            />
        </Svg>
    )
}

export const ArrowDown = ({isDark, ...props}: { isDark?: boolean, props?: any }) => {
    return (
        <Svg
            width={16}
            height={10}
            viewBox="0 0 16 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M15 1.5l-7 7-7-7"
                stroke={isDark ? '#fff' : "#131313"}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export const AnswerIcon = (props:any) => {
    return (
        <Svg
            width={33}
            height={33}
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_5675_4498)">
                <Circle cx={16} cy={16} r={12} fill="#E6F2FF" />
                <Path
                    d="M19.492 10.358c-2.765-2.766-7.36-2.672-9.985.329-2.344 2.625-2.25 6.657.14 9.235a6.63 6.63 0 003.845 2.063c1.922.328 3.75 1.313 5.157 2.72l.046.046 5.532-5.532-.046-.047c-1.454-1.453-2.391-3.329-2.766-5.298a7.055 7.055 0 00-1.922-3.516z"
                    fill="#FFBC00"
                />
                <Path
                    d="M25.306 18.14l-7.689 7.69 1.875 1.874 7.689-7.688-1.875-1.875z"
                    fill="#131313"
                />
                <Path
                    d="M27.696 25.033l-3.188 3.188a1.5 1.5 0 01-2.156 0l-2.625-2.626 5.344-5.344 2.625 2.625c.61.61.563 1.594 0 2.157z"
                    fill="#131313"
                />
                <Path
                    d="M19.493 10.358c-2.766-2.766-7.36-2.672-9.986.329-2.344 2.625-2.25 6.657.14 9.235.282.281.563.563.892.797-1.923-2.578-1.829-6.235.328-8.673l.75-.75c.094.188.187.375.328.516.328.328.844.469 1.36.515a4.573 4.573 0 001.969-.28c.422-.142.797-.423 1.031-.751.328-.422.375-1.125.188-1.594 1.312.094 2.531.563 3.61 1.36-.141-.235-.376-.47-.61-.704z"
                    fill="#FFD75D"
                />
                <Path
                    d="M15.98 13.818c.413.062.755.229 1.026.5.192.192.322.407.39.644.067.237.107.543.118.915.006.322.045.594.119.814.068.215.152.395.254.542.102.136.271.345.508.627.13.13.181.271.153.424a.736.736 0 01-.195.364c-.254.255-.534.23-.839-.076a3.486 3.486 0 01-.5-.67 4.153 4.153 0 01-.424-1.05 2.298 2.298 0 01-.076-.466 5.7 5.7 0 00-.017-.34 2.56 2.56 0 00-.068-.525c-.045-.17-.107-.293-.186-.372a.622.622 0 00-.254-.17 1.093 1.093 0 00-.28-.06 1.103 1.103 0 00-.491.085c-.17.068-.305.153-.407.255a1.59 1.59 0 00-.364.55c-.08.193-.113.379-.102.56.011.17.065.302.16.398.159.158.309.246.45.263.136.011.234.048.297.11a.492.492 0 01.093.144c.09.226.053.42-.11.585-.21.209-.441.282-.695.22-.254-.062-.503-.215-.746-.458a1.6 1.6 0 01-.44-.88c-.068-.362-.029-.752.118-1.17.147-.418.415-.822.805-1.212.226-.226.489-.387.788-.483a1.79 1.79 0 01.915-.068zm2.695 5.152a.72.72 0 01.585-.229c.17 0 .327.074.474.22.125.125.17.289.136.492a.974.974 0 01-.271.509.817.817 0 01-.382.212c-.203.034-.412-.057-.627-.271a.534.534 0 01-.144-.45.794.794 0 01.229-.483z"
                    fill="#fff"
                />
                <Rect
                    x={4.5127}
                    y={11.9185}
                    width={1.2}
                    height={1.2}
                    rx={0.6}
                    fill="#FFBC00"
                />
                <Rect
                    x={4.87305}
                    y={16.7388}
                    width={0.666667}
                    height={0.666667}
                    rx={0.333333}
                    fill="#FFBC00"
                />
                <Rect
                    x={6.07275}
                    y={6.45996}
                    width={1.56013}
                    height={1.56013}
                    rx={0.780064}
                    fill="#FFBC00"
                />
                <Rect
                    x={11.792}
                    y={4.8999}
                    width={1.2}
                    height={1.2}
                    rx={0.6}
                    fill="#FFBC00"
                />
                <Rect
                    x={17.9658}
                    y={6.1001}
                    width={0.666667}
                    height={0.666667}
                    rx={0.333333}
                    fill="#FFBC00"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_5675_4498">
                    <Path fill="#fff" d="M0 0H32.631V32.631H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export const ImageIcon = (props:any) => {
    return (
        <Svg
            width={34}
            height={33}
            viewBox="0 0 34 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={16.9822} cy={16.3157} r={12.2366} fill="#E6F2FF" />
            <G clipPath="url(#clip0_5675_4517)">
                <Rect
                    x={2.70605}
                    y={16.3154}
                    width={20.1896}
                    height={20.1896}
                    rx={0.2}
                    transform="rotate(-45 2.706 16.315)"
                    fill="#fff"
                />
                <G clipPath="url(#clip1_5675_4517)">
                    <Rect
                        x={4.29248}
                        y={16.3154}
                        width={17.9463}
                        height={15.703}
                        rx={0.2}
                        transform="rotate(-45 4.292 16.315)"
                        fill="#E6F2FF"
                    />
                    <Path
                        d="M15.452 27.475L12.56 16.89a.2.2 0 01.246-.246l10.584 2.892-.675-5.215a.2.2 0 01.224-.224l5.215.676-4.764 4.763-7.938 7.939z"
                        fill="#38AD49"
                    />
                    <Ellipse
                        cx={21.6014}
                        cy={12.9048}
                        rx={1.18967}
                        ry={1.18967}
                        transform="rotate(-45 21.601 12.905)"
                        fill="#FFBC00"
                    />
                </G>
            </G>
            <Defs>
                <ClipPath id="clip0_5675_4517">
                    <Rect
                        x={2.70605}
                        y={16.3154}
                        width={20.1896}
                        height={20.1896}
                        rx={0.2}
                        transform="rotate(-45 2.706 16.315)"
                        fill="#fff"
                    />
                </ClipPath>
                <ClipPath id="clip1_5675_4517">
                    <Rect
                        x={4.29248}
                        y={16.3154}
                        width={17.9463}
                        height={15.703}
                        rx={0.2}
                        transform="rotate(-45 4.292 16.315)"
                        fill="#fff"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export const TranslateIcon = (props:any) => {
    return (
        <Svg
            width={33}
            height={33}
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={16.6492} cy={16.3157} r={12.2366} fill="#E6F2FF" />
            <G clipPath="url(#clip0_5675_4528)">
                <Rect
                    x={1.63135}
                    y={16.3154}
                    width={12.9789}
                    height={12.9789}
                    rx={0.5}
                    transform="rotate(-45 1.631 16.315)"
                    fill="#F8F8F8"
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.367 12.874a.54.54 0 01.765 0l1.224 1.224a.54.54 0 01-.765.764L7.367 13.64a.54.54 0 010-.765z"
                    fill="#131313"
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.328 18.126a.54.54 0 010-.765l6.526-6.526a.54.54 0 11.765.764l-6.527 6.527a.54.54 0 01-.764 0z"
                    fill="#131313"
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.222 12.466a.54.54 0 01.765 0 7.463 7.463 0 010 10.554.54.54 0 11-.765-.765 6.381 6.381 0 000-9.024.54.54 0 010-.765z"
                    fill="#131313"
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.764 17.231a.54.54 0 01.721-.255 6.384 6.384 0 007.262-1.249.54.54 0 11.765.765 7.466 7.466 0 01-8.492 1.46.54.54 0 01-.256-.72z"
                    fill="#131313"
                />
            </G>
            <G clipPath="url(#clip1_5675_4528)">
                <Rect
                    x={13.311}
                    y={16.3154}
                    width={12.9789}
                    height={12.9789}
                    rx={0.5}
                    transform="rotate(-45 13.311 16.315)"
                    fill="#fff"
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.43 13.256a.54.54 0 01.553-.13l8.03 2.676a.54.54 0 01-.342 1.026l-7.004-2.334L23 21.498a.54.54 0 11-1.026.342L19.3 13.81a.54.54 0 01.13-.554z"
                    fill="#131313"
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.341 19.757a.54.54 0 010-.765l3.824-3.824a.54.54 0 11.765.765l-3.824 3.824a.54.54 0 01-.765 0z"
                    fill="#131313"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_5675_4528">
                    <Rect
                        x={1.63135}
                        y={16.3154}
                        width={12.9789}
                        height={12.9789}
                        rx={0.5}
                        transform="rotate(-45 1.631 16.315)"
                        fill="#fff"
                    />
                </ClipPath>
                <ClipPath id="clip1_5675_4528">
                    <Rect
                        x={13.311}
                        y={16.3154}
                        width={12.9789}
                        height={12.9789}
                        rx={0.5}
                        transform="rotate(-45 13.311 16.315)"
                        fill="#fff"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export const AnswerIconDark = (props:any) => {
    return(
        <Svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_5675_10430)">
                <Circle cx={16} cy={16} r={12} fill="#00254C" />
                <Path
                    d="M18.444 8.394c-2.766-2.766-7.36-2.672-9.986.328-2.344 2.626-2.25 6.657.14 9.236a6.63 6.63 0 003.845 2.063c1.922.328 3.75 1.312 5.157 2.719l.047.047 5.532-5.532-.047-.047c-1.454-1.454-2.391-3.329-2.766-5.298a7.056 7.056 0 00-1.922-3.516z"
                    fill="#FFBC00"
                />
                <Path
                    d="M24.257 16.176l-7.689 7.689 1.876 1.875 7.688-7.689-1.875-1.875z"
                    fill="#4C4C4C"
                />
                <Path
                    d="M26.648 23.068l-3.188 3.188a1.5 1.5 0 01-2.157 0l-2.625-2.625 5.344-5.345 2.626 2.626c.61.61.562 1.594 0 2.156z"
                    fill="#4C4C4C"
                />
                <Path
                    d="M18.444 8.394c-2.766-2.766-7.36-2.672-9.986.328-2.344 2.626-2.25 6.657.141 9.236.281.281.563.563.89.797-1.921-2.579-1.828-6.235.329-8.673l.75-.75c.094.187.188.375.328.515.328.329.844.47 1.36.516a4.575 4.575 0 001.969-.281c.422-.14.797-.422 1.031-.75.328-.422.375-1.126.188-1.594 1.312.093 2.531.562 3.61 1.36-.141-.235-.375-.47-.61-.704z"
                    fill="#FFD75D"
                />
                <Path
                    d="M14.931 11.854c.413.062.755.229 1.026.5.192.192.322.407.39.644.067.237.107.542.118.915.006.322.046.593.119.813.068.215.152.396.254.543.102.135.271.344.509.627.13.13.18.271.152.424a.737.737 0 01-.195.364c-.254.254-.534.229-.839-.076a3.483 3.483 0 01-.5-.67 4.149 4.149 0 01-.423-1.05 2.299 2.299 0 01-.077-.467 5.654 5.654 0 00-.017-.339 2.56 2.56 0 00-.067-.525c-.046-.17-.108-.294-.187-.373a.622.622 0 00-.254-.17 1.097 1.097 0 00-.28-.059 1.105 1.105 0 00-.491.085c-.17.068-.305.153-.407.254a1.588 1.588 0 00-.364.551c-.08.192-.113.379-.102.56.011.169.065.302.161.398.158.158.308.245.45.262.135.012.234.048.296.11a.488.488 0 01.093.145c.09.226.054.42-.11.584-.21.21-.44.283-.695.22-.254-.061-.503-.214-.746-.457a1.6 1.6 0 01-.44-.881c-.068-.362-.029-.752.118-1.17.147-.418.415-.822.805-1.211.226-.226.489-.387.788-.483a1.79 1.79 0 01.915-.068zm2.695 5.152a.72.72 0 01.585-.229c.17 0 .328.074.475.22.124.125.169.289.135.492a.973.973 0 01-.271.508.818.818 0 01-.381.212c-.204.034-.413-.056-.628-.27a.534.534 0 01-.144-.45.793.793 0 01.23-.483z"
                    fill="#fff"
                />
                <Rect
                    x={3.46387}
                    y={9.9541}
                    width={1.2}
                    height={1.2}
                    rx={0.6}
                    fill="#FFBC00"
                />
                <Rect
                    x={3.82422}
                    y={14.7744}
                    width={0.666667}
                    height={0.666667}
                    rx={0.333333}
                    fill="#FFBC00"
                />
                <Rect
                    x={5.02393}
                    y={4.49561}
                    width={1.56013}
                    height={1.56013}
                    rx={0.780064}
                    fill="#FFBC00"
                />
                <Rect
                    x={10.7432}
                    y={2.93555}
                    width={1.2}
                    height={1.2}
                    rx={0.6}
                    fill="#FFBC00"
                />
                <Rect
                    x={16.917}
                    y={4.13574}
                    width={0.666667}
                    height={0.666667}
                    rx={0.333333}
                    fill="#FFBC00"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_5675_10430">
                    <Path fill="#fff" d="M0 0H32V32H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export const ImageIconDark = (props:any) => {
    return (
        <Svg
            width={33}
            height={32}
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={16.6665} cy={16} r={12} fill="#00254C" />
            <G clipPath="url(#clip0_5675_5019)">
                <Rect
                    x={2.6665}
                    y={16}
                    width={19.7992}
                    height={19.7992}
                    rx={0.2}
                    transform="rotate(-45 2.667 16)"
                    fill="#131313"
                />
                <G clipPath="url(#clip1_5675_5019)">
                    <Rect
                        x={4.22217}
                        y={16}
                        width={17.5993}
                        height={15.3994}
                        rx={0.2}
                        transform="rotate(-45 4.222 16)"
                        fill="#00254C"
                    />
                    <Path
                        d="M15.166 26.944L12.332 16.57a.2.2 0 01.246-.245l10.373 2.833-.662-5.108a.2.2 0 01.224-.224l5.11.661-4.672 4.671-7.785 7.786z"
                        fill="#38AD49"
                    />
                    <Circle
                        cx={21.1968}
                        cy={12.6553}
                        r={1.16667}
                        transform="rotate(-45 21.197 12.655)"
                        fill="#FFBC00"
                    />
                </G>
            </G>
            <Defs>
                <ClipPath id="clip0_5675_5019">
                    <Rect
                        x={2.6665}
                        y={16}
                        width={19.7992}
                        height={19.7992}
                        rx={0.2}
                        transform="rotate(-45 2.667 16)"
                        fill="#fff"
                    />
                </ClipPath>
                <ClipPath id="clip1_5675_5019">
                    <Rect
                        x={4.22217}
                        y={16}
                        width={17.5993}
                        height={15.3994}
                        rx={0.2}
                        transform="rotate(-45 4.222 16)"
                        fill="#fff"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export const TranslateIconDark = (props:any) => {
    return (
        <Svg
            width={33}
            height={32}
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={16.6665} cy={16} r={12} fill="#00254C" />
            <G clipPath="url(#clip0_5675_5019)">
                <Rect
                    x={2.6665}
                    y={16}
                    width={19.7992}
                    height={19.7992}
                    rx={0.2}
                    transform="rotate(-45 2.667 16)"
                    fill="#131313"
                />
                <G clipPath="url(#clip1_5675_5019)">
                    <Rect
                        x={4.22217}
                        y={16}
                        width={17.5993}
                        height={15.3994}
                        rx={0.2}
                        transform="rotate(-45 4.222 16)"
                        fill="#00254C"
                    />
                    <Path
                        d="M15.166 26.944L12.332 16.57a.2.2 0 01.246-.245l10.373 2.833-.662-5.108a.2.2 0 01.224-.224l5.11.661-4.672 4.671-7.785 7.786z"
                        fill="#38AD49"
                    />
                    <Circle
                        cx={21.1968}
                        cy={12.6553}
                        r={1.16667}
                        transform="rotate(-45 21.197 12.655)"
                        fill="#FFBC00"
                    />
                </G>
            </G>
            <Defs>
                <ClipPath id="clip0_5675_5019">
                    <Rect
                        x={2.6665}
                        y={16}
                        width={19.7992}
                        height={19.7992}
                        rx={0.2}
                        transform="rotate(-45 2.667 16)"
                        fill="#fff"
                    />
                </ClipPath>
                <ClipPath id="clip1_5675_5019">
                    <Rect
                        x={4.22217}
                        y={16}
                        width={17.5993}
                        height={15.3994}
                        rx={0.2}
                        transform="rotate(-45 4.222 16)"
                        fill="#fff"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    )
}