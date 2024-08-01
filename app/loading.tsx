// react spinners
import { BeatLoader } from "react-spinners";

export default function Loading() {
    return (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <BeatLoader color="#fff" />
        </div>
    );
}
