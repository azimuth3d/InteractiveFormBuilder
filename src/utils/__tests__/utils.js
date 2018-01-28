import translate from '../translate';

describe(' Translate utility work correctly', () => {
  test('คำถามสั้น is translate to Short question test', () => {
    expect(translate('คำถามสั้น')).toEqual('Short Question');
  });
});
