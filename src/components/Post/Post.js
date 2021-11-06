import React from "react";
import PropTypes from "prop-types";

function Post({author}) {
    return (
        <article style={{margin: '25px'}}>
            <b>{author}</b> <br />
            День первый. Как я забыл покормить кота.
            Кто бы мог подумать, что семантика это так важно, мне срочно нужно было об этом поговорить. Взгляд упал на кота. Кот издал настойчивое «Мяу». И я понял — пришло время для первой записи в блог. И покормить кота.
        </article>
    )
}

Post.propTypes = {
    asideContent: PropTypes.string
};

export default Post;