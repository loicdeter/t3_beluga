<?php
if (!defined('TYPO3_MODE')) {
        die ('Access denied.');
}


$temporaryColumns = array (
    't3_beluga_type' => array(
        'label' => 'LLL:EXT:t3_beluga/Resources/Private/Language/Backend.xlf:pages.size',
        'exclude' => 0,
        'config' => array(
            'type' => 'select',
            'items' => array(
                array('LLL:EXT:t3_beluga/Resources/Private/Language/Backend.xlf:pages.size.large', 'large'),
                array('LLL:EXT:t3_beluga/Resources/Private/Language/Backend.xlf:pages.size.normal', 'normal'),
                array('LLL:EXT:t3_beluga/Resources/Private/Language/Backend.xlf:pages.size.small', 'small'),
            ),
            'default' => 'normal',
        ),
    ),
    't3_beluga_color' => array(
        'label' => 'LLL:EXT:bootstrap_metro/Resources/Private/Language/Backend.xlf:pages.color',
        'exclude' => 0,
        'config' => array (
            'type' => 'select',
            'items' => array (
                array('LLL:EXT:bootstrap_metro/Resources/Private/Language/Backend.xlf:pages.color.cyan', 'cyan'),
                array('LLL:EXT:bootstrap_metro/Resources/Private/Language/Backend.xlf:pages.color.yellow', 'yellow'),
                array('LLL:EXT:bootstrap_metro/Resources/Private/Language/Backend.xlf:pages.color.greenlight', 'greenlight'),
                array('LLL:EXT:bootstrap_metro/Resources/Private/Language/Backend.xlf:pages.color.red', 'red'),
                array('LLL:EXT:bootstrap_metro/Resources/Private/Language/Backend.xlf:pages.color.blue', 'blue'),
                array('LLL:EXT:bootstrap_metro/Resources/Private/Language/Backend.xlf:pages.color.color-white', 'color-white'),
                array('LLL:EXT:bootstrap_metro/Resources/Private/Language/Backend.xlf:pages.color.gray', 'gray'),
                array('LLL:EXT:bootstrap_metro/Resources/Private/Language/Backend.xlf:pages.color.lite', 'lite'),
            ),
            'default' => 'color-white',
        ),
    ),
    't3_beluga_image' => array(
        'label' => 'LLL:EXT:bootstrap_metro/Resources/Private/Language/Backend.xlf:pages.image',
        'exclude' => 1,
        'config' => array(
            'type' => 'check',
            'default' => '0'
        )
    ),
),