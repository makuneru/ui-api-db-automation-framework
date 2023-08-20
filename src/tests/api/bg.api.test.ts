import { expect } from 'chai';
import { ExecuteRequest } from '../../common/api/BaseResponse';
import { method } from '../../common/api/APIConstants';
import { mdnPayload } from '../../resources/test-data/bg-payload';
import { parseEncodedSecret } from '../../resources/utils/SecretParser';
import dotenv from 'dotenv';
import RequestConfigBuilder from '../../common/api/RequestConfig';
import Allure from '../../resources/utils/Allure';
dotenv.config();

const bgAPIheaders = process.env.BG_API_HEADERS as string;
describe('BG First API Tests', async () => {
  it('Returns a valid response', async () => {
    //prepare request config
    const requestConfig = new RequestConfigBuilder()
      .setMethod(method.POST)
      .setUrl('https://apigw.sqa.asurionapi.com/datastaging/v2/stagemdn/') //host + endpoint
      .setData(mdnPayload)
      .setHeaders(parseEncodedSecret(bgAPIheaders))
      .setResolveWithFullResponse(true)
      .build();

    //execute request
    const res = await ExecuteRequest(requestConfig);
    Allure.attachment('RESPONSE DATA', JSON.stringify(res.data));
    //validate response
    expect(res.status).to.be.equal(200);
  });
});
