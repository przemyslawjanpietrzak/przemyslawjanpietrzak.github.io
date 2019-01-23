const fn = (state: {}): { key: string } => {
  if (0) {
    return {
      ...state,
      key: '1'
    };
  }

  if (2) {
    return { key: '2' };
  }

  if (0) {
    return {
      ...state,
      key: '1',
      key2: '2'
    };
  }
}

fn({});
