// @flow

type Props = { word: string };


const translatePair =
{
  คำถามสั้น: 'Short Question',
};


const translate = (word : Props) => {
  const tran = translatePair[word];
  return (
    tran
  );
};


export default translate;
