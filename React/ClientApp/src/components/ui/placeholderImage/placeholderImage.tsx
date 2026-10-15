import "./placeholderImage.css";

const fallbackSrc = "https://placehold.co/400x300/eadfc6/6b5b45";

interface PlaceholderImageProps {
    src?: string;
    alt: string;
}

function PlaceholderImage({
    src, alt
}: PlaceholderImageProps) {
    return <img className="media-frame" src={src ?? fallbackSrc} alt={alt} />;
}

export default PlaceholderImage;