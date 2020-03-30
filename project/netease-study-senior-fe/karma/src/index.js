import '../node_modules/mocha/mocha.js';
import '../node_modules/mocha/mocha.css';
import chai from 'chai';
import { approve } from './response-chain.js';

mocha.setup('bdd');
chai.should();

// 测试 审批链 审批方法
describe('response-chain#approve', () => {
  it('should return 主任审批通过！ when amount < 5', () => {
    approve({ amount: 3 }).should.eql('主任审批通过！');
  });
  it('should return 副董事长审批通过！ when amount = 5', () => {
    approve({ amount: 5 }).should.eql('副董事长审批通过！');
  });
  it('should return 副董事长审批通过！ when 5 <= amount < 10', () => {
    approve({ amount: 9 }).should.eql('副董事长审批通过！');
  });
  it('should return 董事长审批通过！ when amount = 10', () => {
    approve({ amount: 10 }).should.eql('董事长审批通过！');
  });
  it('should return 董事长审批通过！ when 10 <= amount < 50', () => {
    approve({ amount: 49 }).should.eql('董事长审批通过！');
  });
  it('should return 董事会审批通过！ when amount = 50', () => {
    approve({ amount: 50 }).should.eql('董事会审批通过！');
  });
  it('should return 董事会审批通过！ when amount >= 50', () => {
    approve({ amount: 100 }).should.eql('董事会审批通过！');
  });
});

mocha.run();