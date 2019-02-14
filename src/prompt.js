import React from "react";
import PropTypes from "prop-types";

function Prompt({ text }) {
  return (
    <div className="prompt">
      <input type="text" className="prompt-input" placeholder={text} />
    </div>
  );
}

Prompt.propTypes = {
  text: PropTypes.string.isRequired
};
export default Prompt;
