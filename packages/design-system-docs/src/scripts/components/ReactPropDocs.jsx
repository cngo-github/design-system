import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableRow,
} from '@cmsgov/design-system';
import PropTypes from 'prop-types';
import React from 'react';
import ReactPropDoc from './ReactPropDoc';

/**
 * Render a table with property documentation (generated by react-docgen)
 */
class ReactPropDocs extends React.PureComponent {
  rows() {
    const props = Object.getOwnPropertyNames(this.props.propDocs);

    return props.map((prop) => {
      // Hides docs for react props with `@hide-prop` tag in the description
      const description = this.props.propDocs[prop].description;
      if (!description.match(/@hide-prop/i)) {
        return <ReactPropDoc key={prop} name={prop} {...this.props.propDocs[prop]} />;
      }
    });
  }

  render() {
    return [
      <h3 key="propDocsHeader">Props</h3>,
      <Table key="propDocsTable" stackable scrollable compact>
        <TableCaption>
          <span className="ds-u-visibility--screen-reader">React Properties Documentation</span>
        </TableCaption>
        <TableHead>
          <TableRow>
            <TableCell id="columnname">Name</TableCell>
            <TableCell id="columntype">Type</TableCell>
            <TableCell id="columndefault">Default</TableCell>
            <TableCell id="columndescription">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{this.rows()}</TableBody>
      </Table>,
    ];
  }
}

ReactPropDocs.propTypes = {
  propDocs: PropTypes.object,
};

export default ReactPropDocs;
