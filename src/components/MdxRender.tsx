import { useMDXComponent } from 'next-contentlayer/hooks';
import { FC } from 'react';

interface IProps {
    code: string;
}

const MDXRender: FC<IProps> = ({ code }) => {
    const Component = useMDXComponent(code);
    return <Component />;
};

export default MDXRender;