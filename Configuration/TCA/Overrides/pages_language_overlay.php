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
                array('LLL:EXT:t3_beluga/Resources/Private/Language/Backend.xlf:pages.size.contenant', 'contenant'),
            ),
            'default' => 'normal',
        ),
    ),
    't3_beluga_color' => array(
        'label' => 'LLL:EXT:t3_beluga/Resources/Private/Language/Backend.xlf:pages.color',
        'exclude' => 0,
        'config' => array (
            'type' => 'select',
            'items' => array (
                array('LLL:EXT:t3_beluga/Resources/Private/Language/Backend.xlf:pages.color.cyan', 'cyan'),
                array('LLL:EXT:t3_beluga/Resources/Private/Language/Backend.xlf:pages.color.yellow', 'yellow'),
                array('LLL:EXT:t3_beluga/Resources/Private/Language/Backend.xlf:pages.color.greenlight', 'greenlight'),
                array('LLL:EXT:t3_beluga/Resources/Private/Language/Backend.xlf:pages.color.red', 'red'),
                array('LLL:EXT:t3_beluga/Resources/Private/Language/Backend.xlf:pages.color.blue', 'blue'),
                array('LLL:EXT:t3_beluga/Resources/Private/Language/Backend.xlf:pages.color.white', 'white'),
                array('LLL:EXT:t3_beluga/Resources/Private/Language/Backend.xlf:pages.color.gray', 'gray'),
                array('LLL:EXT:t3_beluga/Resources/Private/Language/Backend.xlf:pages.color.lite', 'lite'),
            ),
            'default' => 'white',
        ),
    ),
    't3_beluga_image' => array(
        'label' => 'LLL:EXT:t3_beluga/Resources/Private/Language/Backend.xlf:pages.image',
        'exclude' => 1,
        'config' => array(
            'type' => 'check',
            'default' => '0'
        ),
    ),
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns(
    'pages',
    $temporaryColumns,
    1
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes(
    'pages',
    '--div--;Beluga Menu, t3_beluga_type, t3_beluga_color, t3_beluga_image',
    '',
    'after:own_marker_select'
);
