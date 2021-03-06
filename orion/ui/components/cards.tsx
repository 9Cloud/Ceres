import * as React from "react";
import {Link} from 'tide/router/link';
import {Avatar} from './avatars';
import {TagList} from "./tags";

export const UserCard = (props) => {
    return (
        <div className="l-card-wrapper l-card--user l-clearfix">
            <Avatar image={props.avatar} className="l-inline"/>
            <div className="l-float-left">
                {props.children}
            </div>
        </div>
    )
}

export const CommentCard = (props) => {
    return (
        <div className="l-card-wrapper l-clearfix l-card--comment">
            <Avatar image={props.avatar}/>
            <div className="l-col-lg-2 l-col-md-8 l-col-7 l-col-gut-md">
                <p className="l-white-link">Username</p>
                <p className="l-date">June 17, 2015</p>
            </div>

            <div className="l-col-lg-8 l-col-12">
                {props.children}
            </div>
        </div>
    )
};

export const AlbumCard = (props) => {
    return (
        <div className="l-card-wrapper l-card--album">
            <div className="l-card-item">
                <Avatar image={props.avatar}/>
                <p>{props.children}</p>
                <TagList tags={props.tags}/>
            </div>
        </div>
    )
}

/*
 Usage:
 <RichCard avatar={null} text={thread.last_message} subText={participants} tags={tags} />

 Todo: Deprecated: To be removed in the next iteration.
 */
export const RichCard = (props) => {
    return (
        <Card>
            <Avatar image={props.avatar}/>
            <CardText>{props.text}</CardText>
            <CardSubText>{props.subText}</CardSubText>
            <TagList tags={props.tags}/>
        </Card>
    )
};

export const CardText = (props) => <div className="l-no-margin">{props.children}</div>;

export const CardSubText = (props) => <div className="l-txt--quiet">{props.children}</div>;

export const Card = (props) => {
    return (
        <div className="l-card-wrapper l-clearfix">
            <div>
                {props.children}
            </div>
        </div>
    )
};

export const CardAvatar = ({link_to, image, size}) => {
    return <Link to={link_to}>
        <Avatar image={image} size={size}/>
    </Link>
};