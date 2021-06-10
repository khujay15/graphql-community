import moment from 'moment';
import { useWindowSize } from '@src/hooks';

export const getMaxLengthByWidth = (width: number) => {
  if (width > 590) return 30;
  if (width > 474) return 20;
  else return 13;
};

export const sliceTextByLength = (text: string, length: number) =>
  text.length > length ? text.substr(0, length) + '...' : text;

export const makeArticleURLWithNumber = (name: string, id: number) => {
  return `${window.location.origin}/${name}/article?num=${id}`;
};

export const makeDateForDayOrTime = (date) =>
  moment().diff(moment(date), 'days') > 1
    ? moment(date).format('YY.MM.DD')
    : moment(date).format('HH:mm:ss');

export const makeCategoryTableBody = (list) => {
  const [width] = useWindowSize();
  const newData = list.map(({ title, id, created_date, ...rest }) => {
    const textMaxLength = getMaxLengthByWidth(width);
    const newTitle = sliceTextByLength(title, textMaxLength);
    const createdDate = makeDateForDayOrTime(created_date);

    return {
      ...rest,
      id,
      key: String(id),
      title: newTitle,
      created_date: createdDate,
    };
  });

  newData.sort((a, b) => Number(b.id) - Number(a.id));

  return newData;
};
