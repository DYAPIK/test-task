import * as React from 'react';

function withProps(Child: React.ComponentClass<any>, props: any) {
    return (childProps: any) => <Child {...props} {...childProps} />;
}

export default withProps;
