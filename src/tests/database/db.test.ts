import MySQL from '../../common/database/MySQL';
import { expect } from 'chai';
import { BGQAConnectionConfig } from '../../resources/connections/DBConnection';
import Allure from 'resources/utils/Allure';
describe('BG First DB Tests', () => {
  it('Execute a query and return result', async () => {
    const db: MySQL = new MySQL(BGQAConnectionConfig);
    await db.connect();
    //execute query
    const query = `Select * from BGBillingPrograms where billingProgramId = 'VERIZON-HORIZON-AGENT-US';`;
    const result = await db.executeQuery(query);

    Allure.attachment('RESULTS', JSON.stringify(result));

    //validate query result
    expect(result).to.not.empty;

    await db.disconnect();
  });
});
