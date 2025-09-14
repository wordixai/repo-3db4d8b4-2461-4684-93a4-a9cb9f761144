import { Config } from '@remotion/cli/config';

Config.setVideoImageFormat('jpeg');
Config.setOverwriteOutput(true);
Config.setConcurrency(1);
Config.setPort(3000);

Config.Output.setCodec('h264');
Config.Output.setCrf(18);
Config.Output.setPixelFormat('yuv420p');

export default Config;