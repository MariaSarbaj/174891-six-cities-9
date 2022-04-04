import React from 'react';
import {Host} from '../../types/offers';

function HostBlock(props: {host: Host}): JSX.Element {
  const { avatarUrl, isPro, name } = props.host;

  function showProStatus() {
    return (
      <span className="property__user-status">
        Pro
      </span>
    );
  }
  return (
    <div className="property__host-user user">
      <div className="property__avatar-wrapper user__avatar-wrapper">
        <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
      </div>
      <span className="property__user-name">
        {name}
      </span>
      {isPro && showProStatus()}
    </div>
  );
}

export default HostBlock;
