import '../node_modules/mocha/mocha.js';
import '../node_modules/mocha/mocha.css';
import chai from 'chai';
import sinon from 'sinon';
import jQuery from 'jquery';
import { approve } from './response-chain.js';
import user from './user.js';

mocha.setup('bdd');
chai.should();
let expect = chai.expect;

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

// 测试 异步代码
describe('async', () => {
  it('callback user name should be 小明 after async invoke', () => {
    user.getUser((res) => {
      expect(res.user.name).to.eql('小明');
    });
  });
  it('promise user name should be 小明 after async invoke', () => {
    user.getUserAsync().then((res) => {
      expect(res.user.name).to.eql('小明');
    });
  });
  it('async/await user name should be 小明 after async invoke', async () => {
    let res = await user.getUserAsync();
    return expect(res.user.name).to.eql('小明');
  });
});

// 测试 sinon
describe('sinon', () => {
  it('sinon spy', () => {
    let ajaxSpy = sinon.spy(jQuery, 'ajax');
    user.getUser((res) => {
      res.user.name.should.eql('小明');
    });
    console.log('callCount', ajaxSpy.callCount);
    sinon.assert.calledOnce(ajaxSpy);
    ajaxSpy.restore();
  });
  it('sinon stub', () => {
    let ajaxStub = sinon.stub(jQuery, 'ajax');
    user.getUser();
    console.log('callCount', ajaxStub.callCount);
    ajaxStub.restore();
  });
  it('sinon spy + stub', () => {
    let ajaxStub = sinon.stub(jQuery, 'post');
    ajaxStub.yields();
    let callback = sinon.spy(() => {
      console.log(JSON.stringify({ user: { name: '小明' } }));
    });
    user.getUserByPost(callback);
    console.log('ajax callCount', ajaxStub.callCount);
    console.log('callback callCount', callback.callCount);
    ajaxStub.restore();
  });
});

mocha.run();