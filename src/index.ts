import util from 'util';
import { roleData } from './data/roles';
import { nested } from './mapper/mapper';

const transform = nested('role', 'user', 'permission');
console.log(
  util.inspect(transform(roleData), {
    showHidden: false,
    depth: null,
    colors: true,
  }),
);
