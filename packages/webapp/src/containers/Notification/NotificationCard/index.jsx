import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NotificationCard as PureNotificationCard } from '../../../components/Card/NotificationCard/NotificationCard';

const NotificationCard = ({
  alert,
  status,
  translation_key,
  variables,
  entity_type,
  entity_id,
  context,
  created_at,
  style,
  onClick = null,
  classes = { card: {} },
  ...props
}) => {
  console.log('PNC', variables);
  return (
    <>
      <PureNotificationCard
        alert={alert}
        status={status}
        translation_key={translation_key}
        variables={variables}
        entity_type={entity_type}
        entity_id={entity_id}
        context={context}
        created_at={created_at}
        style={style}
        onClick={onClick}
        classes={classes}
      />
    </>
  );
};

NotificationCard.propTypes = {
  alert: PropTypes.bool,
  status: PropTypes.oneOf(['Unread', 'Read', 'Archived']),
  translation_key: PropTypes.string,
  variables: PropTypes.array,
  entity_type: PropTypes.string,
  entity_id: PropTypes.string,
  context: PropTypes.object,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default NotificationCard;
