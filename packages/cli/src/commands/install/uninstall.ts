/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import {Config} from '@react-native-community/cli-types';
import {logger} from '@react-native-community/cli-tools';
import * as PackageManager from '../../tools/packageManager';
// @ts-ignore FIXME after converting link/unlink
import unlink from '../link/unlink'; // eslint-disable-line import/namespace, import/default

async function uninstall(args: Array<string>, ctx: Config): Promise<void> {
  const name = args[0];

  logger.info(`Unlinking "${name}"...`);
  await unlink.func([name], ctx, {});

  logger.info(`Uninstalling "${name}"...`);
  await PackageManager.uninstall([name]);

  logger.success(`Successfully uninstalled and unlinked "${name}"`);
}

export default {
  func: uninstall,
  description: 'uninstall and unlink native dependencies',
  name: 'uninstall <packageName>',
};
