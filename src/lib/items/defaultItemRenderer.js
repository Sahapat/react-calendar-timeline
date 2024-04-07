import React from 'react'
import PropTypes from 'prop-types'

export const defaultItemRenderer = ({
  item,
  itemContext,
  getItemProps,
  getResizeProps
}) => {
  const { left: leftResizeProps, right: rightResizeProps } = getResizeProps()
  const { title, ...itemProps } = getItemProps(item.itemProps)
  return (
    <div {...itemProps} title={typeof(title) === 'string' ? title : ''}>
      {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : ''}

      <div
        className="rct-item-content"
        style={{ maxHeight: `${itemContext.dimensions.height}` }}
      >
        {itemContext.title}
      </div>

      {itemContext.useResizeHandle ? <div {...rightResizeProps} /> : ''}
    </div>
  )
}

// TODO: update this to actual prop types. Too much to change before release
// future me, forgive me.
defaultItemRenderer.propTypes = {
  item: PropTypes.any,
  itemContext: PropTypes.any,
  getItemProps: PropTypes.any,
  getResizeProps: PropTypes.any
}
