import clsx from 'clsx';
import { CSSProperties, useState } from 'react';
import { defaultArticleState } from 'src/constants/articleProps';
import { ArticleParamsForm } from '../article-params-form';
import { Article } from '../article';
import styles from './App.module.scss';

export const App = () => {
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
