import { useState, useEffect } from "react";
import sanityClient from "../client.js";
const Bounties = () => {
    const [bounties, setBounties] = useState([]);

    useEffect(()=>{
        const fetchItems = async () => {
            const data = await sanityClient.fetch(`*[_type == bounties]{
                bountyName,
                pricePool,
                submission
            }`);
            setBounties(data);
            console.log("useEffect data");
            console.log(data);

        };
        fetchItems();
    }, []);
    
    // in your return simply map the data like you normaly do 
    // bounties.map((bounty) => "html code here")
    // use the attributes like bounty.bountyName, bounty.pricePool, bounty.submission

    return ( <>
    
    </> );
}
 
export default Bounties;