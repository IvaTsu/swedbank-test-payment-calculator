import React from 'react';

export default ({ href, onClick, label }) => <a className="tab" href={ href } onClick={ onClick }>{ label }</a>;