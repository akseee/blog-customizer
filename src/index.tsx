import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [currentParamsState, setCurrentParamsState] =
		useState(defaultArticleState);

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': currentParamsState.fontFamilyOption.value,
					'--font-size': currentParamsState.fontSizeOption.value,
					'--font-color': currentParamsState.fontColor.value,
					'--container-width': currentParamsState.contentWidth.value,
					'--bg-color': currentParamsState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm setCurrentParamsState={setCurrentParamsState} />
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
