const nested =
  (level, ...levels) =>
  (xs, id = level + 'Id', name = level + 'Name') =>
    level == undefined
      ? xs
      : Object.values(
          xs.reduce(
            (a, x, _, __, k = x[id] + '~' + x[name]) => (
              (a[k] = [...(a[k] || []), x]), a
            ),
            {},
          ),
        ).map((xs) => ({
          value: xs[0][id],
          viewText: xs[0][name],
          ...(levels.length > 0
            ? {
                ids: Array.from(new Set(xs.map((x) => x[`${levels[0]}Id`]))),
                children: nested(...levels)(xs),
              }
            : {}),
        }));

export { nested };
