import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { sculptureList } from "../data/list.js";

const GalleryItem = () => {
    // get the param from the url
    // 'http://localhost/gallery/1'
    // useParams => 1
    const { id } = useParams();

    // create our state gfor the gallery item to show
    // null default
    const [item, setItem] = useState(null);

    // use effect search the sculturelist array for the id taken from the params url
    useEffect(() => {
        // serach the scultureList array for the item with the id of 1
        // in the array find the item with the id of 1
        const itemIndex = sculptureList.findIndex(item => {
            return item.id == id;
        });
        let sculpture = sculptureList[itemIndex];
        let nextSculptureID = sculptureList[(itemIndex + 1) % sculptureList.length].id;

        // set state of item to be the individual sculpture
        setItem({ art: sculpture, next: nextSculptureID, index: itemIndex });
    }, [id]);

    // render template
    return (
        <div className="box mt-3">
            {item ? (
                <>
                    <h2 className="title is-5">
                        <i>{item.art.name}</i> by {item.art.artist}
                    </h2>
                    <Link to={`/gallery/${item.next}`}>Next</Link>
                    <h3 className="subtitle is-6">
                        ({item.index + 1} of {sculptureList.length})
                    </h3>
                    <img src={item.art.url} alt={item.art.alt} />
                    <p>{item.art.description}</p>
                </>
            ) : (
                <p> Item not found</p>
            )}
        </div>
    );
};

export default GalleryItem;
