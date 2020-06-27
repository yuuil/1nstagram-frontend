import React from "react";
import styled from "styled-components";
import Avatar from "../Avatar";
import FatText from "../FatText";
import { HeartFull, HeartEmpty } from "../Icon";
import TextareaAutosize from "react-autosize-textarea";

const Post = styled.div`
  ${(props) => props.theme.whiteBox};
  width: 100%;
  max-width: 600px;
  margin-bottom: 25px;
  user-select: none;
`;

const Header = styled.header`
  padding: 15px;
  display: flex;
  align-items: center;
`;

const UserColumn = styled.div`
  margin-left: 10px;
`;

const Location = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 12px;
`;

const Files = styled.div`
  position: relative;
  padding-bottom: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-shrink: 0;
`;

const File = styled.img`
  position: absolute;
  top: 0;
  max-width: 100%;
  width: 100%;
  height: 600px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  opacity: ${props => (props.showing ? 1 : 0)};
  transition: opacity 0.5s linear;
`;

const Button = styled.span`
  cursor: pointer;
`;

const Meta = styled.div`
  padding: 15px;
`;

const Buttons = styled.div`
  ${Button} {
    &:first-child {
      margin-right: 10px;
    }
  }
  margin-bottom: 10px;
`;

const Timestamp = styled.span`
  font-weight: 400;
  text-transform: uppercase;
  opacity: 0.5;
  display: block;
  font-size: 12px;
  margin: 10px 0px;
  padding-bottom: 10px;
  border-bottom: ${(props) => props.theme.lightGreyColor} 1px solid;
`;

const Textarea = styled(TextareaAutosize)`
  border: none;
  width: 100%;
  resize: none;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

const PostPresenter = ({
  user: { username, avatar },
  location,
  files,
  isLiked,
  likeCount,
  createdAt,
  newComment,
  currentItem,
  toggleLike
}) => {
  if(!avatar) avatar = "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png";
  return (
    <Post>
      <Header>
        <Avatar size="sm" url={avatar} />
        <UserColumn>
          <FatText text={username} />
          <Location>{location}</Location>
        </UserColumn>
      </Header>
      <Files>
        {files && files.map((file, index) => <File key={file.id} src={file.url} showing={index===currentItem} />)}
      </Files>
      <Meta>
        <Buttons>
          <Button onClick={toggleLike}>{isLiked ? <HeartFull /> : <HeartEmpty />}</Button>
        </Buttons>
        <FatText text={likeCount === 1 ? "1 like" : `${likeCount} likes`} />
        <Timestamp>{createdAt}</Timestamp>
        <Textarea placeholder={"Add a comment..."} {...newComment} />
      </Meta>
    </Post>
  );
};

export default PostPresenter;
