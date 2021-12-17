# Allocation Pool

{% hint style="danger" %}
**UNI-V2 LP-PKF pool has stopped receiving LP-PKF staking. This** [**policy** ](https://twitter.com/PolkaFoundry/status/1444950425426284544?s=20)**is applied from October 4, 2021, until a new announcement.**
{% endhint %}

**1. GENERAL INFORMATION**

![Allocation Pool](../.gitbook/assets/Screenshot\_50.png)

The allocation pool includes the following information.

**Name of staking pool:** You can check the token used to stake here (LP-PKF or PKF)

**Benefit**: You can check the benefit (With IDO or Without IDO) of the pool.

**Earned**: The current number of PKF you earn as staking rewards.

**APR**: Annual Interest Rate. Click the document icon on the right to view detailed information.

**Total staked**: Total tokens staked in the pool (including your tokens and those of other users).

**Ends in**: Countdown blocks until the pool is finished. Click the time icon on the right to view the block countdown time.

**Withdraw delay time:** The amount of time you must wait when unstaking tokens from the pool. When you unstake tokens:

* The rewards you have earned up to the date you unstake your tokens will be transferred to your wallet address.
* The system will stop calculating your rewards.
* After the delay time, you can receive the tokens you staked to your wallet address.

**2. HOW TO STAKE**

**Step 1.** Click the Details button to view the detailed information of the pool.

![Allocation Pool](../.gitbook/assets/Screenshot\_55.png)

* The detailed information of this pool includes:
  * View Project Site: Click to view the website of the project.
  * View Contract: Click to view the pool contract.
  * Add to Metamask: Click to quickly add the token address to your Metamask Wallet.
  * Earned: The current number of tokens you earn as staking rewards.

**Step 2.** Connect Wallet: Skip this step if you are already connected to your wallet on Red Kite.

!["Connect Wallet" button is displayed](../.gitbook/assets/Screenshot\_59.png)

**Step 3.** Activate pool: Click Enable button to join the pool. After enabling the pool by confirming the transaction on your wallet, you can simply stake your tokens in the pool. Skip this step if you have already enabled PKF.

!["Enable" button is displayed after user connect wallet to Red Kite](../.gitbook/assets/Screenshot\_60.png)

**Step 4.** Stake:

The Stake popup will appear after you click the **Stake** button. This button is disabled if you do not have PKF or LP-PKF to stake.&#x20;

![Click "Stake" button](../.gitbook/assets/Screenshot\_61.png)

![Stake popup](../.gitbook/assets/Screenshot\_62.png)

Click the "**Stake**" button after entering the token number you want to stake. In your wallet address, you will be prompted to confirm the transaction.

You can view the number of tokens you staked and the stalking rewards after staking successfully.

![After stake successfully](../.gitbook/assets/Screenshot\_1.png)

For staking pools with IDO benefit, the staked numbers of PKF or LP-PKF will be used to calculate RKPs, which determine your tier on Red Kite. Go to My Account > My Tier menu to check your tier and your RKPs.&#x20;

**3. HOW TO STAKE MORE**

**Step 1:** Open the pool you have already staked by clicking the Details button.

**Step 2:** Click the Stake button to stake more tokens.

![](../.gitbook/assets/Screenshot\_2.png)

**Step 3:** Enter the number of tokens you want to stake more and click the Stake button on the popup. It will connect you to your wallet address to confirm the transaction.

![Stake more popup](../.gitbook/assets/Screenshot\_65.png)

The new staking rewards are calculated from the date and time you staked more, and based on your new staked amount of PKF or LP-PKF, total tokens staked in pools, number of blocks, etc.

**4. CLAIM STAKE REWARDS**

**Step 1:** Open the pool for which you want to claim rewards by clicking on the Details button.

**Step 2.** Connect Wallet: Skip this step if you are already connected to your wallet on Red Kite.

**Step 3:** Click the "**Claim Token**" button, the Claim popup will appear.

![](../.gitbook/assets/Screenshot\_3.png)

**Step 4:** Click the "**Claim**" button on the popup > Click Sign on your wallet to confirm the transaction. You can check the claimed rewards in your wallet after the transaction is mined successfully.

![Claim staking rewards popup](../.gitbook/assets/Screenshot\_67.png)

{% hint style="warning" %}
Staking rewards will be reset to 0 after you have successfully claimed and continue to be calculated by your remaining staked amount.
{% endhint %}

**5. HOW TO UNSTAKE**\
****For Allocation Pools, you can unstake tokens at any time but you must wait until the end of the delay time to withdraw your token. Follow the steps below to unstake your tokens.

**Step 1:** Open the pool details by clicking on the "**Details"** button.

**Step 2:** Connect Wallet: Skip this step if you are already connected to your wallet on Red Kite.

**Step 3:** Click the "**Unstake**" button, the Unstake popup will appear.

![](../.gitbook/assets/Screenshot\_4.png)

**Step 4:** Enter the amount you want to unstake > Click the "**Unstake"** button on the popup > Click **Sign** on your wallet to confirm the transaction.

![Unstake popup](../.gitbook/assets/Screenshot\_69.png)

* **Case 1: If you unstake 100% of your staked tokens.**

![](../.gitbook/assets/Screenshot\_7.png)

(1) The staking rewards you have earned up to the date you unstake your tokens will be transferred to your wallet address. In the “Earned” area of the pool detail, the staking rewards are reset to 0.

(2) Staking: The amount remaining after you unstaked.

(3) Withdrawal Amount & Available at: The amount you unstaked and the date and time you can withdraw it. The **Withdraw** button is disabled until it reaches the date-time you can withdraw tokens.

* **Case 2: If you do not unstake 100% of your staked tokens.**

![](../.gitbook/assets/Screenshot\_8.png)

(1) The staking rewards you have earned up to the date you unstake your tokens will be transferred to your wallet address. In the “**Earned**” area of pool detail, the staking rewards continue to be calculated by your remaining staked amount.

(2) Staking: The amount remaining after you unstaked. If you continue to unstake, the confirm popup will appear when you click the **Unstake** button again.

![](../.gitbook/assets/Screenshot\_73.png)

When you continue to unstake, the withdrawal delay time will be extended, starting from the last date and time you unstaked, whether or not you have any tokens pending withdrawal.

Example:

* Withdrawal delay time: 7 days
* On 2021-09-01 11:00:00 (UTC+8), you unstaked your tokens -> You can withdraw your tokens on 2021-09-08 11:00:00 (UTC+8)
* But On 2021-09-03 12:30:00 (UTC+8), you continued to unstake your tokens -> The withdrawal delay time extended to 2021-09-09 12:30:00 (UTC+8).

(3) Withdrawal Amount & Available at: The amount you unstaked and the date and time when you can withdraw it. The "**Withdraw"** button is disabled until it reaches the date-time you can withdraw tokens.

**Step 5:** When the withdrawal delay time is over, click the Withdraw button to receive your tokens in your wallet. Be sure to click Sign on your wallet to confirm the transaction.

![](../.gitbook/assets/Screenshot\_9.png)
