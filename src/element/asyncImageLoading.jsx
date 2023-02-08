import React from 'react';

export default function AsyncImage (props) {
    const [loadedSrc, setLoadedSrc] = React.useState(null);
    React.useEffect(() => {
        setLoadedSrc(null);
        
        if (props.src) {
            const handleLoad = () => {
                setLoadedSrc(props.src);
            };
            const image = new Image();
            image.addEventListener('load', handleLoad);
            image.src = props.src;
            return () => {
                image.removeEventListener('load', handleLoad);
            };
        }
    }, [props.src]);
    if (loadedSrc === props.src) {
        
        return (
            // eslint-disable-next-line jsx-a11y/alt-text
            <img {...props}  />
        );
    }
    return null;
};