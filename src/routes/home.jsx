import SiteBanner from "../element/Banner"
import ThumbList from "../element/ThumbList";


export default function SiteHome(){
    return (
        <main className="app">
            <SiteBanner/>
            <ThumbList/>
        </main>
        
    );
}