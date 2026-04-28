import { test } from '../../test';

export default test({
	test({ assert, target }) {
		const head = target.ownerDocument.head;
		const meta = head.querySelector('meta[name="author"]');
		const link = head.querySelector('link[rel="author"]');
		const script = head.querySelector('script[type="application/ld+json"]');

		assert.ok(meta);
		assert.ok(link);
		assert.ok(script);
		if (!meta || !link || !script) throw new Error('Expected head tags to exist');

		assert.equal(meta.getAttribute('class'), null);
		assert.equal(link.getAttribute('class'), null);
		assert.equal(script.getAttribute('class'), null);
	}
});
