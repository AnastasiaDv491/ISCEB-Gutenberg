import React, { forwardRef } from 'react';

export const BannerItem = forwardRef(({ id, ...props }, ref) => {
    
    return (
        <div {...props} ref={ref} className="itemBanner" id={props.post?.id} key={props.post?.id} >
            <div className="bannerCardImage" style={{
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)) "+ (props.post?.imgurl != undefined ? ",url("+props.post.imgurl+")":''),
            }} />
            {props.post?.tagText?.length > 0 &&
                <div className="bannerCardTag">
                    <p className="bannerTagText">{props.post?.tagText[0]}</p>
                </div>
            }

            <div className="bannerCardContent">
                <h3 className="bannerCardTitle">{props.post?.title.rendered}</h3>
                <p className="bannerCardDescription">{props.post?.excerpt.raw}</p>
                <button className="bannerCardButton">More Info</button>
            </div>

        </div>
    )
});