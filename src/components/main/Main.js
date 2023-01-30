import List from "../list/List";
import Random from "../random/Random";

export default function Main({handleShowCanvas}) {
    return (
        <main className="py-3">
            <Random />
            <List handleShowCanvas={handleShowCanvas} />
        </main>
    );
}
