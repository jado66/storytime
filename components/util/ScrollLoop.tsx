import React from "react"

export default function ScrollLoop({
    surroundingBackup = 4,
    outerStyle,
    innerStyle,
    children
}: {
    surroundingBackup: number;
    scrollPaddingPercentage: number;
    outerStyle: React.CSSProperties;
    innerStyle: React.CSSProperties;
    children: any;
}): JSX.Element {
    const contentRef = React.useRef<HTMLDivElement | null>(null);
    const scrollRef = React.useRef<HTMLDivElement | null>(null);
    const [height, setHeight] = React.useState<number>(0);

    const backupHeight = height * surroundingBackup;

    const handleScroll = React.useCallback(() => {
        if (scrollRef.current) {
            const scroll = scrollRef.current.scrollTop;
            if (scroll < backupHeight || scroll >= backupHeight + height) {
                scrollRef.current.scrollTop = backupHeight + (scroll % height);
            }
        }
    }, [height]);

    React.useLayoutEffect(() => {
        if (contentRef.current) {
            setHeight(contentRef.current.offsetHeight);
            if (scrollRef.current)
                scrollRef.current.scrollTop = backupHeight;
        }
    });

    return (
        <div className="infinite-scroll-loop-outer" style={outerStyle}>
            <div
                className="infinite-scroll-loop-inner"
                ref={scrollRef}
                style={{
                    height,
                    ...innerStyle
                }}
                onScroll={handleScroll}
            >
                {Array(surroundingBackup)
                    .fill(undefined)
                    .map(() => (
                        <div>{children}</div>
                    ))}
                <div ref={contentRef}>{children}</div>
                {Array(surroundingBackup)
                    .fill(undefined)
                    .map(() => (
                        <div>{children}</div>
                    ))}
            </div>
        </div>
    );
}