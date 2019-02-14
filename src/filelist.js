import React from "react";
import PropTypes from "prop-types";

function FileList({ files }) {
  return (
    <div className="file-list">
      {files.map(file => (
        <FileListItem key={file.id} text={file.name} />
      ))}
    </div>
  );
}

FileList.propTypes = {
  files: PropTypes.array.isRequired
};

function FileListItem(props) {
  let { text, className } = props;

  if (className === null || className === undefined) {
    className = "";
  }

  return <div className={`list-item ${className}`}>{text}</div>;
}

FileListItem.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default FileList;
